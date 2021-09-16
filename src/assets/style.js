import variables from './stylevariable';

const styles = {
  //general
  regularFont: {
    fontFamily: 'Gotham-Book',
  },
  boldFont: {
    fontFamily: 'Gotham-Bold',
  },
  lightFont: {
    fontFamily: 'Gotham-Light',
  },
  openSansLight: {
    fontFamily: 'OpenSans-Light',
  },
  openSansRegular: {
    fontFamily: 'OpenSans-Regular',
  },
  openSansBold: {
    fontFamily: 'OpenSans-Bold',
  },
  openSansItalic: {
    fontFamily: 'OpenSans-Italic',
  },
  colorWhite: {
    color: variables.white,
  },
  colorPrimary: {
    color: variables.primaryColor,
  },
  colorLight: {
    color: variables.lightColor,
  },
  colorGray: {
    color: variables.greyBackground,
  },
  colorBlack: {
    color: variables.black,
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  debitStatusButton: {
    backgroundColor: '#F9DEE0',
    marginTop: 5,
    borderRadius: 10,
  },
  debitStatusText: {
    color: '#B26B6A',
  },
  creditStatusButton: {
    backgroundColor: '#dbeeb3',
    marginTop: 5,
    borderRadius: 10,
  },
  creditStatusText: {
    color: '#26AE5F',
  },
  noBorder: {
    borderColor: 'transparesnt',
    borderWidth: 0,
  },
  messageBody: {
    lineHeight: 20,
    textAlign: 'justify',
  },
  welcomeBg: {
    backgroundColor: '#11232F',
    padding: 20,
  },
  welcomeButton: {
    backgroundColor: variables.primaryBackground,
    opacity: 0.7,
    borderColor: 'transparent',
    color: '#fff',
  },
  whiteBackground: {
    backgroundColor: variables.white,
  },
  primaryBackground: {
    backgroundColor: variables.primaryColor,
  },
  lightPrimaryBackground: {
    backgroundColor: variables.lightPrimary,
  },
  secondaryBackground: {
    backgroundColor: variables.secondaryColor,
  },
  grayBg: {
    backgroundColor: variables.greyBackground,
  },
  lightBackground: {
    backgroundColor: variables.lightColor,
  },
  lighterBackground: {
    backgroundColor: '#EEF5FD',
  },
  transparentBg: {
    backgroundColor: 'transparent',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  fullHeight: {
    height: '100%',
  },
  authContainer: {
    padding: 20,
    backgroundColor: variables.white,
  },

  authView: {
    marginTop: 30,
  },
  packageContainer: {
    marginLeft: 0,
    marginRight: 0,
    width: '55%',
  },
  packageView: {
    marginTop: 30,
    marginBottom: 30,
  },
  dashboardContainer: {
    padding: 20,
    marginTop: 30,
  },

  orderHistory: {
    marginTop: 20,
  },
  boxes: {
    paddingTop: 80,
    paddingbottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  orderdetailsContainer: {
    padding: 30,
  },
  orderStepsImage: {
    marginLeft: -20,
    marginRight: 10,
  },
  input: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'ProductSans-Regular',
    backgroundColor: '#EEF5FD',
  },
  authButton: {
    marginTop: 40,
    padding: 50,
  },
  unitButton: {
    paddingRight: '17%',
    paddingTop: 0,
    marginBottom: 20,
  },
  createAccount: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerdCard: {
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
  },

  absolute: {
    position: 'absolute',
    top: '-20%',
  },

  centeredImage: {
    alignSelf: 'center',
  },

  divider: {
    borderBottomWidth: 3,
    borderBottomColor: variables.lightColor,
  },

  messageDivider: {
    borderBottomWidth: 1,
    borderBottomColor: variables.greyBackground,
  },

  displayFlex: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flex: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  justifyCenter: {
    justifyItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  alignCenter: {
    alignItems: 'center',
  },
  marginRight: {
    marginRight: '5%',
  },
  authCard: {
    marginTop: -30,
    padding: 20,
  },
  authRegCard: {
    marginTop: -60,
    padding: 20,
  },
  authText: {
    margin: 10,
  },
  sm_margin: {
    marginVertical: 10,
  },
  stackedInput: {
    borderColor: variables.primaryColor,
    borderBottomWidth: 2,
  },
  authstackedInput: {
    borderColor: variables.white,
    borderBottomWidth: 2,
  },
  roundededges: {
    borderRadius: 10,
  },
  walletContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    paddingHorizontal: 20,
  },
  authroundededges: {
    borderRadius: 40,
  },
  authroundedButton: {
    borderRadius: 40,
    marginVertical: 10,
    width: '100%',
  },
  bottomNavigation: {
    marginVertical: 8,
  },
  headerText: {
    marginHorizontal: 24,
    width: '25%',
    marginVertical: 16,
  },
  headerImage: {
    flex: 1,
  },
  iconCard: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginBottom: 20,
  },
  homeContainer: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    backgroundColor: '#FFF',
    height: '100%',
  },
  detailsContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#fff',
    height: '100%',
  },
  fundContainer: {
    marginTop: 20,
    borderRadius: 20,
  },
  contactView: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  authContainerpadding: {
    padding: 20,
  },
  paymentContainer: {
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  orderText: {
    marginTop: 10,
    marginLeft: 10,
  },
  border: {
    borderBottomWidth: 2,
    borderColor: '#eee',
  },
  paymentCard: {
    backgroundColor: '#E5E3E6',
    borderRadius: 5,
    padding: 20,
    marginTop: 10,
  },

  iconsContainer: {
    padding: 5,
    marginTop: 10,
  },

  debitStatusBar: {
    borderColor: 'red',
    borderLeftWidth: 10,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },

  successStatusBar: {
    borderColor: 'green',
    borderLeftWidth: 10,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderRightWidth: 0,
  },

  shadowCard: {
    shadowColor: '#00',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 2,
  },

  transactionCard: {
    marginTop: 15,
    padding: 10,
  },

  boldgreenHeader: {
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#33635E',
  },
  orderstatusButton: {
    width: '25%',
    padding: 0,
    height: 10,
    marginTop: 10,
  },
  statusButton: {
    width: '50%',
    padding: 0,
    height: 10,
    marginTop: 10,
  },
  statusText: {
    fontSize: 10,
  },
  halfWidth: {
    width: '48%',
    marginRight: 10,
  },
  fullWidth: {
    width: '100%',
  },
  responsiveImage: {
    maxWidth: '100%',
    width: '100%',
  },
  containImage: {
    maxWidth: '100%',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    marginRight: 20,
  },
  buttonCircle: {
    width: 44,
    height: 44,
    borderRadius: 44 / 2,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(234, 137, 126, .8)',
  },
  customDrawerContainer: {
    marginVertical: '-12%',
  },
  customDrawerFooter: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  stepsButtons: {
    backgroundColor: variables.primaryColor,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  stepsButtons2: {
    backgroundColor: 'transparent',
    paddingHorizontal: 30,
    paddingVertical: 6,
    borderColor: variables.primaryColor,
    borderWidth: 1,
  },
  mapbox: {
    paddingHorizontal: 20,
    paddingVertical: 6,
    marginTop: 0,
  },
  label: {
    paddingBottom: 10,
  },

  progressComponent: {
    marginTop: -20,
  },
  boxWithShadow: {
    shadowColor: '#eee',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
};

export default styles;
