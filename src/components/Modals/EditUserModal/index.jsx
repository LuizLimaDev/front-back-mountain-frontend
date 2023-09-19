import { Modal, Stack } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { ModalsContext } from '../../../context/ModalsContext';
import { SingContext } from '../../../context/SingContext';
import api from '../../../services/api';
import Sucess from './Sucess';
import Form from './Form';

function EditUserModal() {
  const {
    openModalEditUser,
    setName,
    setEmail,
    handleCloseEditUser
  } = useContext(ModalsContext)
  const { value } = useContext(SingContext)
  const [editFinished, SetEditFinished] = useState(false)

  async function userGetDataInfo() {
    try {
      const { data } = await api.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${value}`
        }
      })

      setName(data.name)
      setEmail(data.email)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(() => {
    userGetDataInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Stack>
      <Modal
        open={openModalEditUser}
        onClose={handleCloseEditUser}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

          width: "100%",
          height: "100%",
        }}
      >
        {editFinished ? <Sucess /> : <Form SetEditFinished={SetEditFinished} />}
      </Modal>
    </Stack >
  );
}

export default EditUserModal;