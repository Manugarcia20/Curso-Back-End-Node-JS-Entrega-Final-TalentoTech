import { db } from "../data/data.js";

import { doc, getDoc, collection, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

function getProduct(id){
  return new Promise(async (res,rej) => {
    try{
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Snap data: ", docSnap)
        console.log("Document ID:", docSnap.id);
        console.log("Document data:", docSnap.data());
        res(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
  }catch(error){
    console.log(error);
    rej(error);
  }

})
 
}

//getProduct(id)

 function getProducts(){
  return(
    new Promise(async (res,rej) => {
      try{
        const querySnapshot = await getDocs(collection(db, "products"));
        console.log("Snap completa: ", querySnapshot)
        const products = [];
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        products.push({...doc.data(), id: doc.id}); 
      });
      console.log(products);
      res(products);
      }catch(error){
          console.log(error);
          rej(error);
      }
    })

  )
}
//getProducts() 

function addProduct(product){
  return(
    new Promise(async (res, rej) => {
      try{
        const docRef = await addDoc(collection(db,"products"),product)
        console.log("Doc ID:", docRef.id, "Producto: ")
        res({...product,id:docRef.id})
      }catch(err){
        console.log(err);
        rej(error);
      }
    })
  )
}

//addProduct({name:"yerba", categoria: "infusion", precio: 200});


function updateProduct(product){
  return(
    new Promise(async (res,rej) => {
    try{
      await updateDoc(doc(db,"products",product.id),{precio:product.precio});
      console.log("Product updated");
      res();
    }catch(error){
      console.log(error);
      rej(error);
    }
    })
  )

}

//updateProduct({id: "p13Bgi9p8iRCp7aEhEo6", precio: 220});

function deleteProduct(id){
  return(
    new Promise(async (res,rej) => {
      try{
        await deleteDoc(doc(db,"products",id));
        console.log("Product deleted");
        res();

      }catch(error){
        console.log(error);
        rej(error);
      }


    })


  )
  
}

//deleteProduct("p13Bgi9p8iRCp7aEhEo6");