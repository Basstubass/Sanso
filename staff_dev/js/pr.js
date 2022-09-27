            // Import the functions you need from the SDKs you need
            // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
            // TODO: Add SDKs for Firebase products that you want to use
            // https://firebase.google.com/docs/web/setup#available-libraries

            var db = firebase.firestore();

            db.collection("users").add({
                name:"クロミ",
                food:"らっきょ"
            })
            .then((doc) => {
                console.log(`追加に成功しました(${doc.id})`);
            })
            .then((error) =>{
                console.log(`追加に失敗しました(${doc.id})`);
            });

            var docRef = db.collection("users").doc("o4CrAegJgQNS2RvoGVYF");

            docRef.get().then((doc)=>{
                if(doc.exists){
                    console.log(doc.data());
                }
                else{
                    console.log("404");
                }
            })
            .catch((error)=>{
                console.log(`データを取得できませんでした(${error})`);
            });

            db.collection("users").get().then((query) => {
                var buff = [];
                query.forEach((doc) => {
                    var data = doc.data();
                    buff.push([doc.id, data.name, data.age]);
                    console.log(buff[0][0])


                    db.collection("users").doc(`${buff[0][0]}`).delete().then(()=>{
                        console.log("削除しました");
                    }).catch((error)=>{
                        console.log(`削除に失敗しました(${error})`);
                    });
                    

                });
                console.log(buff[0][0]);
                console.log(count_collection[2][0]);

            })
            .catch((error)=>{
                console.log(`データの取得に失敗しました (${error})`);
            });


            db.collection("users").where("food", "==", "らっきょ")
                .get()
                .then((querySnapshot)=>{
                    querySnapshot.forEach((doc)=>{
                        console.log(doc.id, "=>", doc.data());
                    });
                })
                .catch((error)=>{
                    console.log(`データの取得に失敗しました(${error})`);
                });

            db.collection("users").doc("o4CrAegJgQNS2RvoGVYF").set({
                name:"ポムポムプリン",
                age:32
            })
            .then(()=>{
                console.log("更新に成功しました");
            })
            .catch((error)=>{
                console.log(`更新に失敗しました(${error})`);
            });

            var count_num=0;
            count_num=count(count_collection);

            for(let i=0; i<5; i++){
                db.collection("users").doc(`${count_collection[i][0]}`).delete().then(()=>{
                    console.log("削除しました");
                }).catch((error)=>{
                    console.log(`削除に失敗しました(${error})`);
                });
            }