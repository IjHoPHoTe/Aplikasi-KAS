import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, StatusBar} from "react-native";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import Svg, { Ellipse } from "react-native-svg";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Home(props) {
  return (
    <View style={styles.container}>
    <StatusBar/>
      <View style={styles.group2}>
        <View style={styles.rect5}>
          <View style={styles.sisaKasColumnRow}>
            <View style={styles.sisaKasColumn}>
              <Text style={styles.sisaKas}>Sisa Kas</Text>
              <Text style={styles.rp31000}>Rp.31.000</Text>
              <View style={styles.buttonDetail}>
                <TouchableOpacity style={styles.layerDetail}></TouchableOpacity>
                <Text style={styles.detail}>Detail</Text>
              </View>
            </View>
            <Image
              source={require("../assets/images/gambarcard.png")}
              resizeMode="contain"
              style={styles.gambarcard}
            ></Image>
          </View>
        </View>
      </View>
      <View style={styles.groupavatarRow}>
        <View style={styles.groupavatar}>
          <Image
            source={require("../assets/images/profil.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
        </View>
        <View style={styles.groupbuttonkalender}>
          <View style={styles.des2022Row}>
            <Text style={styles.des2022}>Des, 2022</Text>
            <IoniconsIcon
              name="browsers-outline"
              style={styles.icon14}
            ></IoniconsIcon>
          </View>
        </View>
      </View>
      <View style={styles.groupnavbar}>
        <View style={styles.rect4}>
          <View style={styles.groupbuttonhomeRow}>
            <View style={styles.groupbuttonhome}>
              <TouchableOpacity style={styles.homeButton}>
                <View style={styles.textButtonhomeStack}>
                  <Text style={styles.textButtonhome}>Home</Text>
                  <IoniconsIcon
                    name="md-home"
                    style={styles.icon8}
                  ></IoniconsIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.groupbuttontransaksi}>
              <TouchableOpacity style={styles.transaksiButton}>
                <View style={styles.textButtontransaksiStack}>
                  <Text style={styles.textButtontransaksi}>Transaksi</Text>
                  <IoniconsIcon
                    name="md-swap"
                    style={styles.icon9}
                  ></IoniconsIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.groupbuttontambah}>
              <TouchableOpacity style={styles.buttonTambah}>
                <View style={styles.ellipse6Stack}>
                  <Svg viewBox="0 0 48.1 48.1" style={styles.ellipse6}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(252,66,87,1)"
                      cx={24}
                      cy={24}
                      rx={24}
                      ry={24}
                    ></Ellipse>
                  </Svg>
                  <IoniconsIcon
                    name="ios-add"
                    style={styles.icon11}
                  ></IoniconsIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.groupbuttonstatistik}>
              <TouchableOpacity style={styles.statistikButton}>
                <View style={styles.statistikStack}>
                  <Text style={styles.statistik}>Statistik</Text>
                  <IoniconsIcon
                    name="ios-pulse"
                    style={styles.icon13}
                  ></IoniconsIcon>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.groupbuttonanggota}>
              <TouchableOpacity style={styles.anggotaButton}>
                <View style={styles.textAnggotaStack}>
                  <Text style={styles.textAnggota}>Anggota</Text>
                  <IoniconsIcon
                    name="md-people"
                    style={styles.icon12}
                  ></IoniconsIcon>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.grouptotalpemasukanRow}>
        <View style={styles.grouptotalpemasukan}>
          <TouchableOpacity style={styles.buttonPemasukan}>
            <View style={styles.ellipseStack}>
              <Svg viewBox="0 0 40.1 40.1" style={styles.ellipse}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(66,136,124,1)"
                  cx={20}
                  cy={20}
                  rx={20}
                  ry={20}
                ></Ellipse>
              </Svg>
              <IoniconsIcon
                name="trending-up-outline"
                style={styles.icon}
              ></IoniconsIcon>
            </View>
            <Text style={styles.rp80000}>Rp.80.000</Text>
            <Text style={styles.textTotalpemasukan}>Pemasukan</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.grouptotalpengeluaran}>
          <TouchableOpacity style={styles.buttonPengeluaran}>
            <View style={styles.ellipse2Stack}>
              <Svg viewBox="0 0 40.1 40.1" style={styles.ellipse2}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(251,82,131,1)"
                  cx={20}
                  cy={20}
                  rx={20}
                  ry={20}
                ></Ellipse>
              </Svg>
              <IoniconsIcon
                name="trending-down-outline"
                style={styles.icon2}
              ></IoniconsIcon>
            </View>
            <Text style={styles.rp49000}>Rp.49.000</Text>
            <Text style={styles.textTotalpengeluaran}>Pengeluaran</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.transaksi}>Transaksi</Text>
      <View style={styles.grouppemasukanharian}>
        <View style={styles.rect2}>
          <View style={styles.pemasukanColumnRow}>
            <View style={styles.pemasukanColumn}>
              <Text style={styles.pemasukan}>Pemasukan</Text>
              <Text style={styles.hariIni}>Hari ini</Text>
            </View>
            <Text style={styles.rp30000}>Rp.30.000</Text>
          </View>
        </View>
      </View>
      <View style={styles.grouppengeluaranharian}>
        <View style={styles.rect3}>
          <View style={styles.pengeluaranColumnRow}>
            <View style={styles.pengeluaranColumn}>
              <Text style={styles.pengeluaran}>Pengeluaran</Text>
              <Text style={styles.pengeluaranHariini}>Hari ini</Text>
            </View>
            <Text style={styles.rp0}>Rp.0</Text>
          </View>
        </View>
      </View>
      <View style={styles.groupanggotaRow}>
        <View style={styles.groupanggota}>
          <TouchableOpacity style={styles.buttonAnggota}>
            <View style={styles.ellipse3Stack}>
              <Svg viewBox="0 0 40.1 40.1" style={styles.ellipse3}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(97,100,206,1)"
                  cx={20}
                  cy={20}
                  rx={20}
                  ry={20}
                ></Ellipse>
              </Svg>
              <IoniconsIcon
                name="md-people"
                style={styles.icon7}
              ></IoniconsIcon>
            </View>
            <Text style={styles.anggota}>Anggota</Text>
            <Text style={styles.anggota2}>30</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.groupsudahbayar}>
          <TouchableOpacity style={styles.buttonSudahbayar}>
            <View style={styles.ellipse4Stack}>
              <Svg viewBox="0 0 40.1 40.1" style={styles.ellipse4}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(71,182,212,1)"
                  cx={20}
                  cy={20}
                  rx={20}
                  ry={20}
                ></Ellipse>
              </Svg>
              <IoniconsIcon
                name="checkmark-outline"
                style={styles.icon5}
              ></IoniconsIcon>
            </View>
            <Text style={styles.sudahBayar}>Sudah Bayar</Text>
            <Text style={styles.text2}>25</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.groupbelumbayar}>
          <TouchableOpacity style={styles.buttonBelumbayar}>
            <View style={styles.ellipse5Stack}>
              <Svg viewBox="0 0 40.1 40.1" style={styles.ellipse5}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(255,165,60,1)"
                  cx={20}
                  cy={20}
                  rx={20}
                  ry={20}
                ></Ellipse>
              </Svg>
              <IoniconsIcon name="close-outline" style={styles.icon6}></IoniconsIcon>
            </View>
            <Text style={styles.belumBayar}>Belum Bayar</Text>
            <Text style={styles.text3}>5</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#000000"
  },
  group2: {
    width: 361,
    height: 165,
    marginTop: 86,
    marginLeft: 25
  },
  rect5: {
    width: 361,
    height: 165,
    backgroundColor: "#fb5283",
    borderRadius: 24
  },
  sisaKas: {
    fontFamily: "Poppins-Medium",
    color: "rgba(255,255,255,1)",
    fontSize: 15
  },
  rp31000: {
    fontFamily: "Poppins-SemiBold",
    color: "rgba(255,255,255,1)",
    fontSize: 28,
    marginTop: 5
  },
  buttonDetail: {
    fontFamily: "Poppins-SemiBold",
    width: 41,
    height: 21,
    marginTop: 20
  },
  layerDetail: {},
  detail: {
    color: "rgba(255,255,255,1)"
  },
  sisaKasColumn: {
    width: 137,
    marginTop: 3,
    marginBottom: 21
  },
  gambarcard: {
    width: 141,
    height: 141,
    marginLeft: 57
  },
  sisaKasColumnRow: {
    height: 141,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 26
  },
  groupavatar: {
    width: 42,
    height: 42
  },
  image: {
    width: 42,
    height: 42
  },
  groupbuttonkalender: {
    width: 110,
    height: 36,
    flexDirection: "row",
    marginLeft: 211,
    marginTop: 3
  },
  des2022: {
    fontFamily: "Poppins-Bold",
    color: "rgba(128,128,128,1)",
    fontSize: 14,
    marginTop: 8
  },
  icon14: {
    color: "rgba(128,128,128,1)",
    fontSize: 33,
    marginLeft: 12
  },
  des2022Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginRight: 1,
    marginLeft: 5
  },
  groupavatarRow: {
    height: 42,
    flexDirection: "row",
    marginTop: -228,
    marginLeft: 25,
    marginRight: 24
  },
  groupnavbar: {
    width: 412,
    height: 64,
    marginTop: 740
  },
  rect4: {
    width: 412,
    height: 64,
    backgroundColor: "rgba(255,255,255,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 4,
      height: 0
    },
    elevation: 24,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    flexDirection: "row"
  },
  groupbuttonhome: {
    width: 44,
    height: 44
  },
  homeButton: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)"
  },
  textButtonhome: {
    top: 27,
    left: 0,
    position: "absolute",
    fontFamily: "Poppins-SemiBold",
    color: "rgba(252,66,87,1)",
    fontSize: 10
  },
  icon8: {
    top: 0,
    left: 4,
    position: "absolute",
    color: "rgba(252,66,87,1)",
    fontSize: 27,
    width: 22,
    height: 30
  },
  textButtonhomeStack: {
    width: 30,
    height: 41,
    marginTop: 1,
    marginLeft: 7
  },
  groupbuttontransaksi: {
    width: 53,
    height: 44,
    marginLeft: 23
  },
  transaksiButton: {
    width: 53,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)"
  },
  textButtontransaksi: {
    top: 27,
    left: 0,
    position: "absolute",
    fontFamily: "Poppins-Regular",
    color: "rgba(128,128,128,1)",
    fontSize: 10
  },
  icon9: {
    top: 0,
    left: 12,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 27,
    height: 30,
    width: 24
  },
  textButtontransaksiStack: {
    width: 48,
    height: 41,
    marginTop: 1,
    marginLeft: 3
  },
  groupbuttontambah: {
    width: 48,
    height: 48,
    marginLeft: 30,
    marginTop: 1
  },
  buttonTambah: {
    width: 48,
    height: 48,
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipse6: {
    top: 0,
    left: 0,
    width: 48,
    height: 48,
    position: "absolute"
  },
  icon11: {
    top: 2,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 39,
    left: 14,
    height: 42,
    width: 20
  },
  ellipse6Stack: {
    width: 48,
    height: 48
  },
  groupbuttonstatistik: {
    width: 53,
    height: 44,
    marginLeft: 29
  },
  statistikButton: {
    width: 53,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)"
  },
  statistik: {
    top: 27,
    left: 0,
    position: "absolute",
    fontFamily: "Poppins-Ragular",
    color: "rgba(128,128,128,1)",
    fontSize: 10
  },
  icon13: {
    top: 0,
    left: 8,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 27,
    height: 30,
    width: 24
  },
  statistikStack: {
    width: 40,
    height: 41,
    marginTop: 1,
    marginLeft: 7
  },
  groupbuttonanggota: {
    width: 53,
    height: 44,
    marginLeft: 16
  },
  anggotaButton: {
    width: 53,
    height: 44,
    backgroundColor: "rgba(255,255,255,1)"
  },
  textAnggota: {
    top: 27,
    left: 0,
    position: "absolute",
    fontFamily: "Poppins-Ragular",
    color: "rgba(128,128,128,1)",
    fontSize: 10
  },
  icon12: {
    top: 0,
    left: 10,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 27,
    height: 30,
    width: 24
  },
  textAnggotaStack: {
    width: 44,
    height: 41,
    marginTop: 1,
    marginLeft: 5
  },
  groupbuttonhomeRow: {
    height: 49,
    flexDirection: "row",
    flex: 1,
    marginRight: 31,
    marginLeft: 32,
    marginTop: 7
  },
  grouptotalpemasukan: {
    width: 172,
    height: 147
  },
  buttonPemasukan: {
    width: 172,
    height: 147,
    backgroundColor: "rgba(217,231,229,1)",
    borderRadius: 24
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  icon: {
    top: 5,
    left: 8,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    height: 30,
    width: 24
  },
  ellipseStack: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20
  },
  rp80000: {
    fontFamily: "Poppins-SemiBold",
    color: "rgba(0,0,0,1)",
    fontSize: 17,
    marginTop: 17,
    marginLeft: 20
  },
  textTotalpemasukan: {
    fontFamily: "Poppins-Regular",
    color: "rgba(107,107,107,1)",
    fontSize: 14,
    marginTop: 1,
    marginLeft: 20
  },
  grouptotalpengeluaran: {
    width: 172,
    height: 147,
    marginLeft: 17
  },
  buttonPengeluaran: {
    width: 172,
    height: 147,
    backgroundColor: "rgba(252,210,223,1)",
    borderRadius: 24
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  icon2: {
    top: 5,
    left: 8,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    height: 30,
    width: 24
  },
  ellipse2Stack: {
    width: 40,
    height: 40,
    marginTop: 20,
    marginLeft: 20
  },
  rp49000: {
    fontFamily: "Poppins-SemiBold",
    color: "rgba(0,0,0,1)",
    fontSize: 17,
    marginTop: 17,
    marginLeft: 20
  },
  textTotalpengeluaran: {
    fontFamily: "poppins-regular",
    color: "rgba(107,107,107,1)",
    fontSize: 14,
    marginTop: 1,
    marginLeft: 20
  },
  grouptotalpemasukanRow: {
    height: 147,
    flexDirection: "row",
    marginTop: -605,
    marginLeft: 25,
    marginRight: 26
  },
  transaksi: {
    fontFamily: "Poppins-SemiBold",
    color: "#121212",
    fontSize: 15,
    marginTop: 13,
    marginLeft: 27
  },
  grouppemasukanharian: {
    width: 362,
    height: 82,
    marginTop: 10,
    marginLeft: 25
  },
  rect2: {
    width: 362,
    height: 82,
    backgroundColor: "rgba(71,182,212,1)",
    borderRadius: 25
  },
  pemasukan: {
    fontFamily: "Poppins-SemiBold",
    color: "rgba(255,255,255,1)",
    fontSize: 14
  },
  hariIni: {
    fontFamily: "Poppins-Regular",
    color: "rgba(255,255,255,1)",
    fontSize: 14
  },
  pemasukanColumn: {
    width: 85
  },
  rp30000: {
    fontFamily: "Poppins-SemiBold",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    marginLeft: 136,
    marginTop: 12
  },
  pemasukanColumnRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 28,
    marginRight: 26
  },
  grouppengeluaranharian: {
    width: 362,
    height: 82,
    marginTop: 13,
    marginLeft: 25
  },
  rect3: {
    width: 362,
    height: 82,
    backgroundColor: "rgba(255,165,60,1)",
    borderRadius: 25
  },
  pengeluaran: {
    fontFamily: "Poppins-SemiBold",
    color: "rgba(255,255,255,1)",
    fontSize: 14
  },
  pengeluaranHariini: {
    fontFamily: "Poppins-Regular",
    color: "rgba(255,255,255,1)",
    fontSize: 14
  },
  pengeluaranColumn: {
    width: 92
  },
  rp0: {
    fontFamily: "Poppins-SemiBold",
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    marginLeft: 177,
    marginTop: 11
  },
  pengeluaranColumnRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 28,
    marginRight: 26
  },
  groupanggota: {
    width: 112,
    height: 120
  },
  buttonAnggota: {
    width: 112,
    height: 120,
    backgroundColor: "rgba(227,229,255,1)",
    borderRadius: 25
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  icon7: {
    top: 5,
    left: 8,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    height: 30,
    width: 24
  },
  ellipse3Stack: {
    width: 40,
    height: 40,
    marginTop: 17,
    marginLeft: 36
  },
  anggota: {
    fontFamily: "Poppins-Regular",
    color: "rgba(107,107,107,1)",
    fontSize: 12,
    marginTop: 7,
    marginLeft: 30
  },
  anggota2: {
    fontFamily: "Poppins-Regular",
    color: "#121212",
    fontSize: 16,
    marginLeft: 47
  },
  groupsudahbayar: {
    width: 112,
    height: 120,
    marginLeft: 13
  },
  buttonSudahbayar: {
    width: 112,
    height: 120,
    backgroundColor: "rgba(229,241,255,1)",
    borderRadius: 25
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  icon5: {
    top: 5,
    left: 10,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    height: 30,
    width: 20
  },
  ellipse4Stack: {
    width: 40,
    height: 40,
    marginTop: 17,
    marginLeft: 36
  },
  sudahBayar: {
    fontFamily: "Poppins-Regular",
    color: "rgba(107,107,107,1)",
    fontSize: 12,
    marginTop: 7,
    marginLeft: 18
  },
  text2: {
    fontFamily: "Poppins-Regular",
    color: "#121212",
    fontSize: 16,
    marginLeft: 47
  },
  groupbelumbayar: {
    width: 112,
    height: 120,
    marginLeft: 13
  },
  buttonBelumbayar: {
    width: 112,
    height: 120,
    backgroundColor: "rgba(254,246,238,1)",
    borderRadius: 25
  },
  ellipse5: {
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    position: "absolute"
  },
  icon6: {
    top: 5,
    left: 12,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    height: 30,
    width: 16
  },
  ellipse5Stack: {
    width: 40,
    height: 40,
    marginTop: 17,
    marginLeft: 36
  },
  belumBayar: {
    fontFamily: "Poppins-Regular",
    color: "rgba(107,107,107,1)",
    fontSize: 12,
    marginTop: 7,
    marginLeft: 18
  },
  text3: {
    fontFamily: "Poppins-Regular",
    color: "#121212",
    fontSize: 16,
    marginLeft: 51
  },
  groupanggotaRow: {
    height: 120,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 25,
    marginRight: 25
  }
});

export default Home;
