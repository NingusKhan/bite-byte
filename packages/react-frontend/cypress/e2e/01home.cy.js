describe('Happy End W/ Existing Account', () => {
  it('pass', () => {

    const failUser = {
      login: "failUser",
      password: "pwdFailPwd"
    }; 

    const passUser = {
      login: "passUser",
      password: "pwsPassUser"
    }; 


    const mealData = {
      title: "Plov",
      ingridients: "Oil, Veggies, Meat (Lamb/Beef/Chicken), Rice (Long-grain), Garlic, Spices",
      image: "https://ic.pics.livejournal.com/stalic/2762948/1508199/1508199_original.jpg",
      instructions: "Pat the beef dry with paper towels. This will help the meat sear better in the pot. Season with generous amount of salt and pepper. Set aside. Preheat large dutch oven over high heat. Once hot, add oil then add beef. Sear for 5-8 minutes until meat is browned on all sides."
    }


    cy.visit('/');


    cy.get('[id="profile"]').click();


    cy.get('input[id="username"]').type(failUser.login);
    cy.get('input[id="password"]').type(failUser.password);
    cy.get('button[type="submit"]').click(); 

    cy.get('img[src="./images/logo.png"]').click();
    cy.scrollTo(0, 900); 
    cy.get('a[href="/browse"]').wait(1000).click();
    

    cy.get('input[id="mealName"]').type(mealData.title);
    cy.get('input[id="mealImage"]').type(mealData.image);
    cy.get('input[id="mealIngredients"]').type(mealData.ingridients);
    cy.get('input[id="mealInstructions"]').type(mealData.instructions);
    cy.get('button[type="submit"]').click(); 


    cy.get('[id="profile"]').click();
    cy.get('a[href="/register"]').click()
    cy.wait(6000);
    cy.get('input[id="username"]').type(passUser.login);
    cy.get('input[id="password"]').type(passUser.password);
    cy.get('input[id="confirmPassword"]').type(passUser.password);
    cy.get('button[type="submit"]').click(); 
    cy.wait(6000);

    cy.get('a[href="/login"]').click()
    cy.get('input[id="username"]').type(passUser.login);
    cy.get('input[id="password"]').type(passUser.password);
    cy.get('button[type="submit"]').click(); 
    cy.wait(6000);




    cy.get('a[href="/browse"]').click();
    cy.get('input[id="mealName"]').type(mealData.title);
    cy.get('input[id="mealImage"]').type(mealData.image);
    cy.get('input[id="mealIngredients"]').type(mealData.ingridients);
    cy.get('input[id="mealInstructions"]').type(mealData.instructions);
    cy.get('button[type="submit"]').click(); 


    cy.get(`img[alt="${mealData.title}"]`).click()
    cy.wait(6000);
    cy.scrollTo(0, 100);
    cy.wait(6000);
    cy.visit('/browse');
    cy.wait(6000);

    cy.get('a[href="/myrecipes"]').click();
    cy.wait(6000);

    cy.get(`img[alt="${mealData.title}"]`).get('button[class="btn btn-danger btn-sm"]').click();
    cy.wait(6000);
    cy.visit('/browse');
    cy.wait(6000);
  })
})