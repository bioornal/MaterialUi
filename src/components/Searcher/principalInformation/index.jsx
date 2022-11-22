import { Stack, Typography } from '@mui/material'
import React from 'react'
 
function PrincipalInformation({userState}) {
    const {name, login, created_at} = userState
  return (
    <>
    <Stack direction={"row"} sx={{justifyContent:"space-between"}}>
        <Typography variant='h4'>{name}</Typography>
        <Typography variant='subtitle2'>{created_at}</Typography>
    </Stack>
    <Typography variant='caption'>{`@${login}`}</Typography>
    </>
  )
}

export default PrincipalInformation