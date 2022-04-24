import React from 'react';
import toast from 'react-hot-toast';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  reauthenticateWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';

function Settings() {
  const router = useRouter();
  const deleteAccount = async () => {
    const { currentUser } = auth;
    // Get the first provider only
    const userProvider = currentUser?.providerData[0].providerId;
    if (!currentUser) {
      toast.error('Something went wrong');
      return;
    }
    if (userProvider === 'password') {
      toast.error('Something went wrong');
    }
    const AuthProvider =
      userProvider === 'google.com' ? GoogleAuthProvider : FacebookAuthProvider;
    try {
      const response = await reauthenticateWithPopup(
        currentUser,
        new AuthProvider()
      );

      if (response) {
        await deleteDoc(doc(db, `Users/${currentUser.uid}`));
        currentUser.delete();
        router.push('/');
      }
    } catch (e) {
      toast.error('Coś poszło nie tak.');
    }
  };

  return (
    <AuthorizedTemplate title="Ustawienia" description="Strona ustawień">
      <h1 className="text-xl font-semibold mt-2">Ustawienia konta</h1>
      <div className="text-center">
        <button type="button" className="btn m-2" onClick={deleteAccount}>
          Usuń konto
        </button>
      </div>
    </AuthorizedTemplate>
  );
}

export default Settings;
