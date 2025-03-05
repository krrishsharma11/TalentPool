import {COLORS} from './Colors';

const CommonStyles = {
  container: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  button: {
    // backgroundColor: '#7900BA',
    backgroundColor: COLORS.primaryThemeColor,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    columnGap: 5,
    width: '100%',
    height: 56,
  },
  input: {
    height: 55,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#F7F8F9',
  },
  Dropdown: {
    height: 55,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    // backgroundColor: '#F7F8F9',
    backgroundColor: COLORS.primaryThemeColor,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  card: {
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 4},
    // shadowOpacity: 0.2,
    // shadowRadius: 5,

    backgroundColor: COLORS.cardColor,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 2,
  },
};

export {CommonStyles};
