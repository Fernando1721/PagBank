import { Image, Text, View } from "react-native";
import {global} from "../../css/Styles.js";

export default function Content(){
    return(
        <View style={global.content}>
            <View style={global.ajuda}>
                <Text style={global.beneficios}> O que dejesa fazer? </Text>
                <Text style={global.txtbeneficios}> Veja beneficios </Text>
            </View>

            <View style={global.funcao1}>

                <View style={global.recargacartao}>
                <Image source={require("../../assets/card.png")} style={global.imgcard} />
                <Text style={global.recarga}> Recarga Cartão pré-pago </Text>
                </View>

                <View style={global.recargacartao}>
                <Image source={require("../../assets/tranfer.png")} style={global.imgcard} />
                <Text style={global.recarga}> Transferência Bancária </Text>
                </View>

                </View>

                <View style={global.funcao2}>

                <View style={global.recargacartao}>
                <Image source={require("../../assets/deposit.png")} style={global.imgcard} />
                <Text style={global.recarga}> Depositar Dinheiro </Text>
                </View>

                <View style={global.recargacartao}>
                <Image source={require("../../assets/chat.png")} style={global.imgcard} />
                <Text style={global.recarga}> Atendimento/Chat </Text>
                </View>

                </View>

                <View style={global.funcao3}>

                <View style={global.recargacartao}>
                <Image source={require("../../assets/pagament.png")} style={global.imgcard} />
                <Text style={global.recarga}> Pagamentos </Text>
                </View>

                <View style={global.recargacartao}>
                <Image source={require("../../assets/pix.png")} style={global.imgcard} />
                <Text style={global.recarga}> Pix </Text>
                </View>

                </View>

            </View>


        
    )
}