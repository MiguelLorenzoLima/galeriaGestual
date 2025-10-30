import React, { useState } from 'react';
import { View, FlatList, Image, Pressable, StyleSheet, Modal, Text, TouchableOpacity } from 'react-native';

export default function GalleryScreen({ navigation }) {
  const [images, setImages] = useState([
    { id: '1', uri: 'https://valecadaviagem.com/wp-content/uploads/2022/07/foto-capa-do-post-no-blog-696x464.jpg.webp' },
    { id: '2', uri: 'https://paradisoturismo.com.br/wp-content/uploads/2021/09/swiss9-1924x1283.jpg' },
    { id: '3', uri: 'https://aresdomundo.com/wp-content/uploads/2020/10/Paris-de-noite-7.jpg' },
    { id: '4', uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/e4/12/c9/visao-privilegiada.jpg?w=600&h=400&s=1' },
    { id: '5', uri: 'https://www.guiadasemana.com.br/contentFiles/image/opt_w1280h960/2018/05/FEA/51007_costa-amalfitana.jpg' },
    { id: '6', uri: 'https://viajoteca.com/wp-content/uploads/2020/02/shutterstock_490194529.jpg' },
    { id: '7', uri: 'https://cdn-imgix.headout.com/media/images/5917edf80d23cd41f17bb920fe106b34-19674-osaka-combo-osaka-amazing-pass---universal-studios-japan-tickets-01.jpg??fm=pjpg&auto=compress&w=1100&h=750&crop=faces&fit=min' },
    { id: '8', uri: 'https://www.earthtrekkers.com/wp-content/uploads/2025/04/Things-to-Do-in-Amsterdam-1053x1053.jpg' },
    { id: '9', uri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/137000/137742-Acapulco-And-Vicinity.jpg' },



  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (image) => {
    navigation.navigate('Imagem', { uri: image.uri });
  };

  const handleLongPress = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const handleDelete = () => {
    setImages(images.filter(img => img.id !== selectedImage.id));
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => handlePress(item)}
            onLongPress={() => handleLongPress(item)}
            style={styles.imageWrapper}
          >
            <Image source={{ uri: item.uri }} style={styles.image} />
          </Pressable>
        )}
      />

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Excluir esta imagem?</Text>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={handleDelete} style={styles.deleteBtn}>
                <Text style={styles.btnText}>Excluir</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.cancelBtn}>
                <Text style={styles.btnText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8, backgroundColor: '#fff' },
  imageWrapper: { flex: 1, margin: 5 },
  image: { width: '100%', height: 150, borderRadius: 10 },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalBox: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '80%' },
  modalText: { fontSize: 18, marginBottom: 10, textAlign: 'center' },
  buttons: { flexDirection: 'row', justifyContent: 'space-around' },
  deleteBtn: { backgroundColor: 'red', padding: 10, borderRadius: 8 },
  cancelBtn: { backgroundColor: 'gray', padding: 10, borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: 'bold' },
});
