import {makeStyles} from '@material-ui/core'
import {red,green} from "@material-ui/core/colors"

export default makeStyles(()=>({
    avatarIncome:{
        color:'#fff',
        backgroundColor:green[500]
    },
    avatarExpence:{
        color:'#d32f2f',
        backgroundColor:red[500]
    },
    List:{
        maxHeight:"150px",
        overflow:'auto'
    }
}))