import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Rating} from 'react-native-ratings';
import {SafeAreaView} from 'react-native';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

import {formatPrice, calcDesc} from '../../util/format';

// import api from '../../services/api';
import db from '../../../database';

import {
  List,
  Container,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AddToCartButton,
  ProductAmount,
  ProductAmountIcon,
  ProductAmountText,
  ProductPriceContainer,
  ProductPriceTotal,
  ProductRemove,
  ButtonContainer,
  ProductHeader,
  ProductRemoveIcon,
  ProductDiscount,
  RatingContainer,
  RatingTotal,
  ImageContainer,
  ButtonText,
} from './styles';

class Home extends Component {
  /* //WITH API SERVER
  state = {
    products: db.products,
    amount: db.stock.reduce((amount, product) => {
      amount[product.id] = product.amount;
      return amount;
    }, {}),
  };
  */
  state = {
    products: [],
  };

  componentDidMount() {
    try {
      // const response = await api.get('/products'); //WITH API SERVER
      // this.setState({ products: response.data }) //WITH API SERVER
      const response = db.products;
      this.setState({products: response});
    } catch (err) {
      //console.tron.error(err); //WITH REACTOTRON FUNCTIONALITY
      console.log(err);
    }
  }

  handleAddProduct = id => {
    const {addToCartRequest} = this.props;
    addToCartRequest(id);
  };

  handleRemoveProduct = id => {
    const {updateAmountRequest, removeFromCart, amount} = this.props;
    if (amount[id] == 1) {
      removeFromCart(id);
    }
    updateAmountRequest(id, amount[id] - 1);
  };

  // TODO: Em ProductDiscount e ProductPriceTotal, criar função para aparecer somente se houve desconto
  render() {
    const {products} = this.state;
    const {amount, navigation} = this.props;

    return (
      <SafeAreaView>
        <List
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({item}) => (
            <Container>
              <ProductHeader onPress={() => navigation.navigate('Product')}>
                <ImageContainer>
                  <ProductImage source={{uri: item.image}} />
                </ImageContainer>
                <ProductTitle>{item.title}</ProductTitle>
                <RatingContainer>
                  <Rating imageSize={14} readonly startingValue={item.rating} />
                  <RatingTotal>({item.rating_count})</RatingTotal>
                </RatingContainer>
                <ProductPriceContainer>
                  <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                  <ProductPriceTotal>
                    {formatPrice(item.price_total)}
                  </ProductPriceTotal>
                  <ProductDiscount>
                    {`-${calcDesc(item)}%` || null}
                  </ProductDiscount>
                </ProductPriceContainer>
              </ProductHeader>
              <ButtonContainer>
                {amount[item.id] >= 1 ? (
                  <ProductRemove
                    onPress={() => this.handleRemoveProduct(item.id)}>
                    <ProductRemoveIcon />
                  </ProductRemove>
                ) : null}
                <AddToCartButton onPress={() => this.handleAddProduct(item.id)}>
                  <ProductAmount>
                    <ProductAmountIcon />
                    <ProductAmountText>
                      {amount[item.id] || 0}
                    </ProductAmountText>
                  </ProductAmount>
                  <ButtonText>Adicionar</ButtonText>
                </AddToCartButton>
              </ButtonContainer>
            </Container>
          )}
        />
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.shape({
    amount: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
