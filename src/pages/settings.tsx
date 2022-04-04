import React from 'react';
import toast from 'react-hot-toast';
import AuthorizedTemplate from 'templates/AuthorizedTemplate';
import {
  EmailAuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  reauthenticateWithCredential,
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
    const AuthProvider =
      userProvider === 'google.com' ? GoogleAuthProvider : FacebookAuthProvider;
    try {
      let response = null;

      if (userProvider === 'password') {
        const password = prompt('Podaj hasło');
        const credentials = EmailAuthProvider.credential(
          currentUser?.email || '',
          password || ''
        );
        response = await reauthenticateWithCredential(currentUser, credentials);
      } else {
        response = await reauthenticateWithPopup(
          currentUser,
          new AuthProvider()
        );
      }

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
      <div className="text-center">
        <button type="button" className="btn btn-primary m-2">
          Zresetuj postęp
        </button>
        <button type="button" className="btn m-2" onClick={deleteAccount}>
          Usuń konto
        </button>
      </div>
    </AuthorizedTemplate>
  );
}

export default Settings;
