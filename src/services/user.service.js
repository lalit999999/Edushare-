import { db } from "../firebase/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export const getTopContributors = async () => {
  const q = query(
    collection(db, "users"),
    orderBy("uploads", "desc")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d, i) => ({
    id: d.id,
    rank: i + 1,
    ...d.data(),
  }));
};
