import { collection, deleteDoc, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../../src/firebase/config';
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
} from '../../../src/store/journal/journalSlice';
import {
  startLoadingNotes,
  startNewNote,
} from '../../../src/store/journal/thunks';

describe('Pruebas en Journal Thunks', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  beforeEach(() => jest.clearAllMocks);
  test('startNewNote debe de crear una nueva nota en blanco', async () => {
    const uid = 'TEST-UID';
    getState.mockReturnValue({ auth: { uid: uid } });
    await startNewNote()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith(savingNewNote());
    expect(dispatch).toHaveBeenCalledWith(
      addNewEmptyNote({
        body: '',
        title: '',
        id: expect.any(String),
        date: expect.any(Number),
        imageUrls: [],
      })
    );
    expect(dispatch).toHaveBeenCalledWith(
      setActiveNote({
        body: '',
        title: '',
        id: expect.any(String),
        date: expect.any(Number),
        imageUrls: [],
      })
    );
    //Borrar de firebase
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    const deletePromises = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));
    await Promise.all(deletePromises);
  });

  test('startLoadingNotes debe cargar las notas', async () => {
    const uid = 'TEST-UID';
    getState.mockReturnValue({ auth: { uid } });
    await startNewNote()(dispatch, getState);
    // const notes = await loadNotes( uid );
    // console.log( notes );
    const notes = [
      {
        body: '',
        title: '',
        imageUrls: [],
        id: expect.any(String),
        date: expect.any(Number),
      },
    ];
    await startLoadingNotes()(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith(setNotes(notes));
    //Borrar de firebase
    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);
    const deletePromises = [];
    docs.forEach((doc) => deletePromises.push(deleteDoc(doc.ref)));
    await Promise.all(deletePromises);
  });
});
