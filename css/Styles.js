import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
    header:{
        backgroundColor: "#0fd60f"
    },
    title:{
        display: "flex",
        flexDirection:"row",
        height: 80
    },
    txtbank:{
        color: "white",
        fontSize:30,
        fontWeight: "bold",
        marginTop: 30,
        left: 15
    },
    arrow :{
        width:15,
        height:15,
        left: 45,
        top:45
    },
    notification:{
        width: 25,
        height: 25,
        left: 177,
        top: 32
    },
    txtsaldo:{     
        color: "white",
        fontSize:17,
        left: 15,
    },
    saldo:{
        height:80,
        left: 15,
        flexDirection: "row"
    },
    saldoconta:{
        fontSize: 30,
        color: "white",
    },
    eye:{
        width: 30,
        height: 30,
        left: 133
    },
    blokreq:{
        flexDirection:"row",
        top: -25
    },
    blok:{
        color: "white",
        fontSize: 17,
        left: 12,
    }, 
    req:{
        color: "white",
        fontSize: 17,
        left: 80,
    },
    saldoblock:{
        flexDirection:"row"
    },
    valorblock:{
        color: "white",
        fontSize: 22,
        left: 12,
        top: -25
    }, 
    saldoareceber:{
        color: "white",
        fontSize: 22,
        left: 70,
        top: -25
    }, 
    help:{
        left: 136,
        top:-25,
        width: 27,
        height: 27
    },
    cashback:{
        height:50,
        flexDirection:"row",
        backgroundColor: "#07c308",
    },
    txtcashback:{
        top: 17,
        fontSize: 14,
        color: "white",
        left: 17
    },
    valorcashback:{
        top: 17,
        color: "white",
        left: 17
    },
    helpcashback:{
        left: 88,
        top:13,
        width: 27,
        height: 27
    },
    content:{
        backgroundColor:"#f4f4f7",
        height: 320
    },
    ajuda:{
        flexDirection:"row",
        top: 14,
        left: 13
    },
    beneficios:{
        fontSize:16
    },
    txtbeneficios:{
        fontSize:15,
        left: 78,
        color:"blue"
    },
    funcao1:{
        top: 25,
        flexDirection:"row",
       
    },
    recargacartao:{
        backgroundColor:"white",
        width:150,
        height:110,
        left: 15,
        marginLeft: 15,
    },
    imgcard:{
        left:110,
        top:15
    },
    recarga:{
        fontSize:18,
        top:15,
        left:10,
      
    },
    funcao2:{
        flexDirection:"row",
        top:40,

    },
    funcao3:{
        flexDirection:"row",
        top:55,
    },
    footer:{
       flexDirection:"row",
        backgroundColor:"white",
       height:50,
       position:"absolute",
       bottom:-60


    },
    home:{
        backgroundColor:"f4f4f7",
        paddingLeft:5
    },
    imghome:{
        marginLeft:20
    },
    txtextrato:{
        marginLeft:11
    },
    txthome:{
        left:16
    }









})