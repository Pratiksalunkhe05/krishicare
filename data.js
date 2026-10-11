// DEMO DATA: replace with the client's real crops, diseases and products
const CATS={"Vegetables":{i:"🥬",c:[["Tomato","🍅"],["Onion","🧅"],["Potato","🥔"],["Chilli","🌶️"]]},
"Fruits":{i:"🍎",c:[["Mango","🥭"],["Grapes","🍇"],["Banana","🍌"],["Pomegranate","🍎"],["Citrus","🍊"]]},
"Field Crops":{i:"🌾",c:[["Cotton","☁️"],["Soybean","🫘"],["Wheat","🌾"],["Rice","🍚"],["Maize","🌽"]]}};
const D={
"Early Blight":{t:"Fungal",e:"🍂",o:"A common fungal disease causing leaf spots, defoliation and reduced yield.",s:["Brown circular spots","Yellowing leaves","Lower leaves affected first"],f:["Warm temperatures","High humidity","Extended leaf wetness"],p:[1,2]},
"Late Blight":{t:"Fungal",e:"🥀",o:"A fast-spreading disease favoured by cool, wet weather.",s:["Water-soaked patches","White growth under leaves","Rapid browning"],f:["Cool nights","Rain or fog"],p:[1,3]},
"Powdery Mildew":{t:"Fungal",e:"🤍",o:"White powdery growth on leaf surfaces that weakens the plant.",s:["White powder on leaves","Curling leaves","Stunted growth"],f:["Dry days, humid nights"],p:[3,4]},
"Leaf Spot":{t:"Fungal",e:"🟤",o:"Spots on leaves that may merge and cause leaf drop.",s:["Small dark spots","Yellow halo","Premature leaf drop"],f:["Humid weather","Overhead watering"],p:[2,4]},
"Downy Mildew":{t:"Fungal",e:"🌫️",o:"Yellow patches above and greyish growth beneath leaves.",s:["Yellow angular patches","Grey fuzz underneath"],f:["Cool, moist conditions"],p:[1,3]},
"Bacterial Leaf Spot":{t:"Bacterial",e:"🦠",o:"Bacterial infection causing small water-soaked lesions.",s:["Water-soaked spots","Spots turning brown","Leaf distortion"],f:["Warm, wet weather","Splashing rain"],p:[4]},
"Anthracnose":{t:"Fungal",e:"⚫",o:"Dark sunken lesions on leaves and fruit.",s:["Dark sunken spots","Fruit rot"],f:["Warm, humid conditions"],p:[2,3]},
"Rust":{t:"Fungal",e:"🟠",o:"Orange-brown pustules on leaves reducing photosynthesis.",s:["Orange pustules","Yellowing","Early leaf drop"],f:["Moist, mild weather"],p:[3,2]},
"Wilt":{t:"Fungal",e:"🥀",o:"Plants wilt and yellow due to soil-borne infection.",s:["Wilting in day heat","Yellow lower leaves","Brown stem tissue"],f:["Warm soil","Poor drainage"],p:[4,1]}};
const CD={Tomato:["Early Blight","Late Blight","Leaf Spot","Bacterial Leaf Spot"],Onion:["Downy Mildew","Leaf Spot","Wilt"],Potato:["Early Blight","Late Blight","Wilt"],Chilli:["Anthracnose","Powdery Mildew","Leaf Spot"],Mango:["Anthracnose","Powdery Mildew","Bacterial Leaf Spot"],Grapes:["Downy Mildew","Powdery Mildew","Anthracnose"],Banana:["Leaf Spot","Wilt","Anthracnose"],Pomegranate:["Bacterial Leaf Spot","Leaf Spot","Wilt"],Citrus:["Anthracnose","Leaf Spot","Bacterial Leaf Spot"],Cotton:["Wilt","Leaf Spot","Rust"],Soybean:["Rust","Leaf Spot","Downy Mildew"],Wheat:["Rust","Powdery Mildew","Leaf Spot"],Rice:["Leaf Spot","Bacterial Leaf Spot","Rust"],Maize:["Rust","Leaf Spot","Downy Mildew"]};
const P={1:{n:"Demo Fungicide A",k:"Fungicide",ing:["Demo Active Ingredient A","XX%"],r:4.5,b:["Helps manage fungal infection","Supports healthier foliage"]},
2:{n:"Demo Fungicide B",k:"Fungicide",ing:["Demo Active Ingredient B","XX%"],r:4,b:["Protective action on leaves","Helps protect new growth"]},
3:{n:"Demo Systemic Protector C",k:"Systemic Fungicide",ing:["Demo Active Ingredient C","XX%"],r:4.5,b:["Moves within the plant","Supports recovery"]},
4:{n:"Demo Bio-Treatment D",k:"Bio-Protectant",ing:["Demo Active Ingredient D","XX%"],r:3.5,b:["Gentle on beneficial organisms","Fits integrated crop care"]}};
