import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>App de Estudos</Text>

      <Image
        source={require('./assets/book-svgrepo-com 1.png')}
        style={estilos.logo}
      />

      <Text style={estilos.legenda}>Organize provas, tarefas e revisões.</Text>

      <View style={estilos.cartao}>
        <Text style={estilos.cartaoTitulo}>Matemática</Text>
        <Text style={estilos.cartaoTexto}>
          Revisar funções para sexta-feira.
        </Text>
      </View>

      <View style={estilos.cartao}>
        <Text style={estilos.cartaoTitulo}>História</Text>
        <Text style={estilos.cartaoTexto}>
          Ler capítulo sobre Revolução Industrial.
        </Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 24,
    paddingTop: 60,
  },
  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  logo: {
    width: 90,
    height: 90,
    marginTop: 16,
  },
  legenda: {
    fontSize: 18,
    color: '#64748b',
    marginTop: 12,
    marginBottom: 24,
  },
  cartao: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
  },
  cartaoTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 6,
  },
  cartaoTexto: {
    fontSize: 17,
    color: '#475569',
  },
});
