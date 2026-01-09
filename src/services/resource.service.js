import { db, storage } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  serverTimestamp
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadResource = async (file, data, user) => {
  const fileRef = ref(storage, `resources/${user.id}/${file.name}`);
  await uploadBytes(fileRef, file);
  const url = await getDownloadURL(fileRef);

  await addDoc(collection(db, "resources"), {
    ...data,
    tags: data.tags.split(",").map(t => t.trim()),
    fileUrl: url,
    fileType: file.type.includes("pdf") ? "PDF" : "ZIP",
    fileSize: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
    uploadedBy: { id: user.id, name: user.name },
    uploadedAt: serverTimestamp(),
    downloads: 0,
    rating: 0,
    reviews: 0,
    status: "Pending",
  });
};

export const getApprovedResources = async () => {
  const q = query(
    collection(db, "resources"),
    where("status", "==", "Approved"),
    orderBy("uploadedAt", "desc")
  );

  const snap = await getDocs(q);
  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
