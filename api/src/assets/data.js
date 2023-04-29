import bcrypt from "bcryptjs";

const data = {
	users: [
		{
			name: "Admin",
			email: "admin@gmail.com",
			password: bcrypt.hashSync("123"),
			isAdmin: true,
		},
		{
			name: "Customer",
			email: "customerr@gmail.com",
			password: bcrypt.hashSync("123"),
			isAdmin: false,
		},
	],
	products: [
		{
			name: "Kiwi x Kg",
			slug: "Kiwi",
			price: 799,
			description: "Kiwi",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			imageCategory: "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 1,
			brand: "Sin marca",
			numReviews: 0,
		},
		{
			name: "Huevos blancos x12",
			slug: "Huevos blancos x12 Carton",
			price: 943,
			description: "Cartonde huevos blancos 12 unidades",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/677925-800-auto?v=637734621757330000&width=800&height=auto&aspect=true",
			imageCategory: "https://jumboargentina.vtexassets.com/arquivos/ids/537347-800-auto?v=636972888517500000&width=800&height=auto&aspect=true",
			stock: 40,
			isDeleted: false,
			comments: [],
			category: "Frutas y Verduras",
			rating: 3,
			brand: "Doña Lala",
			numReviews: 0,
		},
		{
			name: "Carne Picada Esp x Kilo",
			slug: "Carne Picada Especial",
			price: 1.459,
			description: "Carne picada especial.",
			image:
				"https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/9a7a2287-3dc5-438d-b555-a94951d0c9be___2cea52dd3f65e4b81c8a464b4143400d.png",
			imageCategory:
				"https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/9a7a2287-3dc5-438d-b555-a94951d0c9be___2cea52dd3f65e4b81c8a464b4143400d.png",			
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},
		{
			name: "Milanesa de Carne",
			slug: "Milanesa de Carne",
			price: 2000,
			description: "Milanesa de Nalga Casera.",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/676761-800-auto?v=637728575944500000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/9a7a2287-3dc5-438d-b555-a94951d0c9be___2cea52dd3f65e4b81c8a464b4143400d.png",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 3.5,
			brand: "Sin marca",
			numReviews: 0,
		},
		{
			name: "1/4 Trasero de Pollo - Fresco",
			slug: "1/4 Trasero de Pollo",
			price: 669,
			description: "Cuarto de pollo trasero fresco",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/764069-800-auto?v=638084434020330000&width=800&height=auto&aspect=trueg",
			imageCategory:
				"https://veaargentina.vtexassets.com/assets/vtex.file-manager-graphql/images/9a7a2287-3dc5-438d-b555-a94951d0c9be___2cea52dd3f65e4b81c8a464b4143400d.png",
				stock: 20,
			isDeleted: false,
			comments: [],
			category: "Carniceria",
			rating: 5,
			brand: "Sin marca",
			numReviews: 0,
		},
		{
			name: "Gaseosa Cola Pepsi 2.25L",
			slug: "Pepsi 2.25L",
			price: 399,
			description: "Botella de Pepsi de 2.25 litros",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/769353-800-auto?v=638120073784130000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/769353-800-auto?v=638120073784130000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 2,
			brand: "Pepsi",
			numReviews: 0,
		},
		{
			name: "Gaseosa Coca-cola Sabor Original 2.25 L",
			slug: "Coca-cola Original 2.25L",
			price: 669,
			description: "Botella de Coca-cola sabor Original de 2.25 litros",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/770903-800-auto?v=638128606670570000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/769353-800-auto?v=638120073784130000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Bebidas",
			rating: 4.5,
			brand: "Coca-cola",
			numReviews: 0,
		},
		{
			name: "Shampoo Pantene Prov Essentianls Restauración 400ml",
			slug: "Shampoo Pantene Prov Essentianls Restauración",
			price: 1000,
			description:
				"Nutrí tu pelo desde la raíz para que crezca largo y fuerte hasta las puntas con la fórmula multivitaminas de Pantene.El shampoo Restauración de Pantene Pro-V Essentials está formulado con omega 9, óleo de argán, antioxidante y Pro-Vitaminas, ayuda a reducir la pérdida de proteínas** y a reparar las cutículas para prevenir las puntas abiertas. Para mejores resultados usá el sistema de shampoo y acondicionador Pantene Pro-V Essentials. **Pérdida de proteína debido al quiebre usando el sistema Pantene versus shampoo sin ingredientes acondicionadores",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/706107-800-auto?v=637909043246300000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/706107-800-auto?v=637909043246300000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 3,
			brand: "Pantene",
			numReviews: 0,
		},
		{
			name: "Acondicionador Hidra Hialur¢nico Elvive Lïoral Paris 400ml",
			slug: "Acondicionador Hidra Hialur¢nico Elvive Lïoral Paris",
			price: 1092,
			description:
				"Nutrí tu pelo desde la raíz para que crezca largo y fuerte hasta las puntas con la fórmula multivitaminas de Pantene.El shampoo Restauración de Pantene Pro-V Essentials está formulado con omega 9, óleo de argán, antioxidante y Pro-Vitaminas, ayuda a reducir la pérdida de proteínas y a reparar las cutículas para prevenir las puntas abiertas.",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/712670-800-auto?v=637945333124200000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/712670-800-auto?v=637945333124200000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Cuidado Personal",
			rating: 2,
			brand: "Elvive Lïoral Paris",
			numReviews: 0,
		},
		{
			name: "Prepizza De Tomate 1u",
			slug: "Prepizza",
			price: 285,
			description: "Prepizza con base de salsa de tomate congelada",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/423818-800-auto?v=636482196480430000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/423818-800-auto?v=636482196480430000&width=800&height=auto&aspect=true",				
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 5,
			brand: "Fresh MP",
			numReviews: 0,
		},
		{
			name: "Baguette Artesanal 1u",
			slug: "Baguette Artesanal",
			price: 139,
			description: "Baguette hecha en casa",
			image:
				"https://jumboargentina.vtexassets.com/arquivos/ids/423862-800-auto?v=636482196748900000&width=800&height=auto&aspect=true",
			imageCategory:
				"https://jumboargentina.vtexassets.com/arquivos/ids/423818-800-auto?v=636482196480430000&width=800&height=auto&aspect=true",
			stock: 20,
			isDeleted: false,
			comments: [],
			category: "Panaderia",
			rating: 4,
			brand: "Fresh MP",
			numReviews: 0,
		},
	],
};

export default data;
