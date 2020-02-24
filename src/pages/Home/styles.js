import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';

export const List = styled.FlatList.attrs({
  horizontal: false,
})`
  /* margin-left: 15px; */
  flex-grow: 0;
`;

export const Container = styled.View`
  /* width: 80%; */
  background: ${colors.light};
  padding: 10px;
  border-radius: 4px;
  margin: 15px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
  padding: 10px;
`;

export const ImageContainer = styled.View`
  align-items: center;
`;

export const ProductTitle = styled.Text`
  font-size: 14px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin: 10px 0;
  padding-left: 10px;
  padding-right: 10px;
`;

export const RatingTotal = styled.Text`
  font-size: 10px;
  padding-left: 5px;
  padding-right: 10px;
`;

export const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 10px;
`;

export const ProductHeader = styled.TouchableOpacity``;

export const ProductPriceContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
  margin: 0 10px;
`;

export const ProductPriceTotal = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.darkGray};
  text-decoration: line-through;
  /* padding-left: 10px; */
  padding-right: 10px;
`;

export const ProductDiscount = styled.Text`
  font-size: 10px;
  color: ${colors.light};
  background-color: ${colors.red};
  padding: 2px;
  border-radius: 25px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const ProductRemove = styled.TouchableOpacity`
  background: ${colors.red};
  align-items: center;
  padding: 12px;
`;

export const ProductRemoveIcon = styled(Icon).attrs({
  name: 'remove-circle',
  color: colors.light,
  size: 16,
})``;

export const AddToCartButton = styled.TouchableOpacity`
  background: ${colors.primary};
  flex-direction: row;
`;

export const ProductAmount = styled.View`
  background: rgba(0, 0, 0, 0.3);
  flex-direction: row;
  padding: 12px;
`;

export const ProductAmountIcon = styled(Icon).attrs({
  name: 'add-shopping-cart',
  color: colors.light,
  size: 16,
})``;

export const ProductAmountText = styled.Text`
  color: ${colors.light};
  margin-left: 5px;
`;

export const ButtonText = styled.Text`
  color: ${colors.light};
  text-transform: uppercase;
  font-family: 'Helvetica';
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  padding: 12px 30px;
`;
