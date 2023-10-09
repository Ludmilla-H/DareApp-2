import firestore from '@react-native-firebase/firestore';
import { updateTod } from '../redux/player';

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
 * récupere la liste des actions ou vérités dans la base de donnée, en fonction de l'id de la catégorie, du type
 * params (id: <string> : id category)
 ***/
export const loadDataDareOrTruth = async (id , type) => {


  const snapShot = await firestore().collection("TruthOrDare")
                                    .where("category" , "==" , id)
                                    .where("type" , "==" , type)
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

/***
 * récupere la liste des actions ou vérités dans la base de donnée, en fonction de l'id de la catégorie, du type
 * tod = chaque joueur a un tableau d'actions ou vérités qui ne retourne pas les identifiants déjà piochés 
 * params (id: <string> : id category)
 ***/
export const loadDataDareOrTruthTod = async (id , type , tod) => {

  console.log("tod" , tod)

  const snapShot = await firestore().collection("TruthOrDare")
                                    .where("category" , "==" , id)
                                    .where("type" , "==" , type)
                                    .where(firestore.FieldPath.documentId(), 'not-in' , tod)
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
}; //end loadDataDareOrTruthTod





