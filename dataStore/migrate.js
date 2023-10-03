import firestore from "@react-native-firebase/firestore";
import { data } from "./data";
export const migrate = async () => {
    console.log("start migrate") ;

    data.map(async(item) => {

    //    await firestore().collection('TruthOrDare').add(item)
       console.log(item.title)

    })
}
