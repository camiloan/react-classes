import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SaveOutlined from '@mui/icons-material/SaveOutlined';
import UploadOutlined from '@mui/icons-material/UploadOutlined';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks';
import { ImageGallery } from '../components';
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from '../../store/journal';

export const NoteView = () => {
  const dispath = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);
  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);
  const fileInputRef = useRef();

  useEffect(() => {
    dispath(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [messageSaved]);

  const onSaveNote = () => {
    dispath(startSaveNote());
  };
  const onDelete = () => {
    dispath(startDeletingNote());
  };

  const onFileInputChange = ({ target }) => {
    console.log(target.files);
    if (target.files === 0) return;
    dispath(startUploadingFiles(target.files));
  };

  return (
    <Grid
      className='animate__animated animate__fadeIn animate_faster'
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
          {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <input
          type='file'
          multiple
          onChange={onFileInputChange}
          style={{ display: 'none' }}
          ref={fileInputRef}
        />
        <IconButton
          onClick={() => fileInputRef.current.click()}
          color='primary'
          disabled={isSaving}
        >
          <UploadOutlined />
        </IconButton>
        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color='primary'
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        {' '}
        <TextField
          type='text'
          variant='filled'
          fullWidth
          placeholder='Ingrese un título'
          label='Título'
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type='text'
          variant='filled'
          fullWidth
          multiline
          placeholder='¿Qué sucedió en el día de hoy?'
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent='end'>
        <Button onClick={onDelete} sx={{ mt: 2 }} color='error'>
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>
      {/* Image gallery */}
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
