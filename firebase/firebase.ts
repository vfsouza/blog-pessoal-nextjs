import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";

const firebaseApp = initializeApp({
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
});

const db = getFirestore(firebaseApp);

async function getAllProjectsId() {
	const docs = await (await getDocs(collection(db, "projetos"))).docs;
	const ids = docs.map((doc) => {
		return {
			params: {
				id: doc.id,
			},
		};
	});
	console.log(ids);
	return ids;
}

async function getProjectData(id: string) {
	const ref = doc(db, "projetos", id);
	const project = await getDoc(ref);
	if (project) {
		console.log(`Documento de id ${id} encontrado!\nData: ${project.data}`);
	} else {
		console.log(`Documento de id ${id} não encontrado`);
	}
	return project.data;
}

export { db, getAllProjectsId, getProjectData };
