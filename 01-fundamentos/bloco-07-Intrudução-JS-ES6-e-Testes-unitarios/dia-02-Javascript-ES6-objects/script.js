const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = () => {
    // Adicione abaixo as informações necessárias.
    /* Complete a função customerInfo() para que seu retorno seja similar 
    a "Olá Ana Silveira, entrega para: Rafael Andrade, 
    Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701". */

    const frase = `olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, N ${order.address.number}, AP: ${order.address.apartment} `;
    console.log(frase); 
  }
  
  customerInfo();
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);

