#  Galeria de Imagens com Funcionalidade de Gestos

Um aplicativo desenvolvido em **React Native** com **Expo**, que apresenta uma **galeria de imagens interativa**.  
O projeto faz parte de uma atividade de **Interações Avançadas e Feedback Aprimorado**, com foco em **gestos de toque** e **respostas dinâmicas da interface**.

---


Implementar uma **galeria de imagens** exibida em grade, com **interações por gestos**:

-  **Toque simples** → abre a imagem em **tela cheia**.  
-  **Toque longo (long press)** → abre um **menu de contexto** (Modal) com a opção de **excluir** a imagem.  
-  Se confirmado, a imagem é removida dinamicamente da galeria.  

---

## Telas

<div align="center">
  <img width="270" height="660" alt="Tela da Galeria" src="https://github.com/user-attachments/assets/20a78623-ef5a-497e-b0a1-fa982ddb380e" />
  <img width="270" height="660" alt="Tela de Visualização" src="https://github.com/user-attachments/assets/1a5ca795-b9dc-45d5-a53e-036b3bf78538" />
  <img width="270" height="660" alt="Modal de Exclusão" src="https://github.com/user-attachments/assets/03619105-dfaf-4ec0-acda-ca1e68a6b3a5" />
</div>

---


## Tecnologias

- **React Native** e **Expo**
- **useState** para controle de estado
- **FlatList** para exibição em grade
- **Pressable** com `onPress` e `onLongPress`
- **Modal** para confirmação de exclusão
- **.filter()** para manipulação da lista de imagens

---
