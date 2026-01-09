import { db } from "../firebase/firebase";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";

export const getComments = async (resourceId) => {
  const q = query(
    collection(db, "comments"),
    where("resourceId", "==", resourceId)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
};

export const addComment = async (resourceId, user, content, rating) => {
  await addDoc(collection(db, "comments"), {
    resourceId,
    userId: user.id,
    userName: user.name,
    userAvatar: user.name[0],
    content,
    rating,
    date: new Date().toISOString(),
  });
};
