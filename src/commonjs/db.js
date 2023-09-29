import firestore from '@react-native-firebase/firestore';

//chargement des données d'une collection a partie de son name
export const loadData = async (collectionName) => {
  const snapShot = await firestore().collection(collectionName).get();

  // Vérification des données
  if (!snapShot.empty) {
    const data = snapShot.docs.map(doc => {
      return {id: doc.id, ...doc.data()};
    });
    return data
  } else {
    return [] ;
  }
}; //end loadData


/***
 * récupere la liste des action ou vérité dans la base de donnée, fonction de l'id de la catégorie
 * params (id: <string> : id category)
 ***/
export const loadDataDareOrTruth = async (id) => {
  console.log('loadDataDareOrTruth' , id)
  const snapShot = await firestore().collection("TruthOrDare").where("category" , "==" , id)
  .get();

  // Vérification des données
  if (!snapShot.empty) {
    const data = snapShot.docs.map(doc => {
      return {id: doc.id, ...doc.data()};
    });
    return data
  } else {
    return [] ;
  }
}; //end loadDataDareOrTruth





