import { Image, Text, View } from "react-native";
import {global} from "../../css/Styles.js";

export default function Header(){
    return(
        <View style={global.header}>
            <View style={global.title}>
                <Text style={global.txtbank}> PagBank </Text>
                <Image source={require("../../assets/arrow.png")} style={global.arrow} />
                <Image source={require("../../assets/notification.png")} style={global.notification} />
            </View>

            <Text style={global.txtsaldo}> Saldo Disponível </Text>

            <View style={global.saldo}>
                <Text style={global.saldoconta}> R$ 2.500,00 </Text>
                <Image source={require("../../assets/eye.png")} style={global.eye} />
            </View>

            <View style={global.blokreq}>
                <Text style={global.blok}> Bloqueado </Text>
                <Text style={global.req}> A receber </Text>
            </View>
            <View style={global.saldoblock}> 
                <Text style={global.valorblock}> R$ 20,55 </Text>
                <Text style={global.saldoareceber}> 1.200,34 </Text>
                <Image source={require("../../assets/help.png")} style={global.help} />
            </View>
            <View style={global.cashback}>
                <Text style={global.txtcashback}> CashBack últimos 30 dias </Text>
                <Text style={global.valorcashback}> R$ 52,69 </Text>
                <Image source={require("../../assets/help.png")} style={global.helpcashback} />


            </View>
        </View>
    )
}