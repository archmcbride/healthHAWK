  


// var lastWeekCalories = 0
//     if DATES = TODAY - 7 THRU TODAY 
//         for ROW in TABLE
//             TOTAL += CALORIES 
//     return TOTAL CALORIES 




var mainVm = new Vue({
    el: '#app',
    data : {
        newUserName : '', 
        newUserPassword : '', 
        oldUserName : '', 
        oldUserPassword : '', 
        foodName : '',
        foodObj: {
            text:'',
            calories:0,
        },
        mealName : '', 
        mealDate : '', 
        user    : {}, 
        allMeals: [],
        displayedMeals: [],
        myOptions: [
            {text:'Egg', value: 84},
            {text: 'Pancake', value: 86},
            {text: 'Cereal', value: 124},
            {text:'Oatmeal', value: 145},
            {text: 'Burrito', value: 305},
            {text: 'Taco', value: 142},
            {text: 'Pizza', value: 237},
            {text: 'Cheeseburger', value: 295},
            {text:'Hotdog', value: 250},
            {text: 'Steak', value: 514},
            {text: 'Lobster', value: 286},
            {text:'Lasagna', value: 386},
            {text: 'Salad', value: 151},
            {text: 'Jambalaya', value: 294},
            {text:'Granola Bar', value: 200},
            {text: 'Pretzel', value: 389},
            {text: 'Donut', value: 198},
            {text:'Cookie', value: 49},
            {text: 'Cupcake', value: 93},
        ],

        message: 'Vue.js & Chart.js',
        // labels: mealdate,
        labels: [],
        y_values: [12, 19, 3, 5, 2, 15]
    },
    



    created: function(){
        let that = this;
        $.get('/me', function(data){
            // console.log(data)
            mainVm.user = data
            that.getMyMeals()


        })
        
    },


    

    methods : {
        getMyMeals : function(){
            $.get('/me/meals', function(data){
                // console.log(data[2])
                mainVm.allMeals = data
                for (var i=0; i<mainVm.allMeals.length; i++){
                    mainVm.allMeals[i].mealdate = new Date(mainVm.allMeals[i].mealdate);
                    mainVm.labels.push(new Date(mainVm.allMeals[i].mealdate).toDateString());
                    // mainVm.calories.push(new Date(mainVm.allMeals[i].mealdate).toDateString());
                }
                // meal variables
                var breakCalories = 0
                var lunchCalories = 0
                var dinnerCalories = 0
                var snackCalories = 0

                // food variables
                var eggCal = 0
                var pancakeCal = 0
                var cerealCal = 0
                var oatmealCal = 0
                var burritoCal = 0
                var tacoCal = 0
                var pizzaCal = 0
                var cheeseburgerCal = 0
                var hotdogCal = 0
                var steakCal = 0
                var lobsterCal = 0
                var lasagnaCal = 0
                var saladCal = 0
                var jambalayaCal = 0
                var granolabarCal = 0
                var pretzelCal = 0
                var donutCal = 0
                var cookieCal = 0
                var cupcakeCal = 0

                // calorie counters - meals
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].mealname === 'Breakfast'){
                        breakCalories += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].mealname === 'Lunch'){
                        lunchCalories += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].mealname === 'Dinner'){
                        dinnerCalories += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].mealname === 'Snack'){
                        snackCalories += mainVm.allMeals[i].calories
                    }
                }
                console.log('meal Calories: ', breakCalories, lunchCalories, dinnerCalories, snackCalories)

                // calorie counters - foods
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Egg'){
                        eggCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Pancake'){
                        pancakeCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Cereal'){
                        cerealCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Oatmeal'){
                        oatmealCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Burrito'){
                        burritoCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Taco'){
                        tacoCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Pizza'){
                        pizzaCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Cheeseburger'){
                        cheeseburgerCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Hotdog'){
                        hotdogCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Steak'){
                        steakCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Lobster'){
                        lobsterCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Lasagna'){
                        lasagnaCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Salad'){
                        saladCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Jambalaya'){
                        jambalayaCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Granola Bar'){
                        granolabarCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Soft Pretzel'){
                        pretzelCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Donut'){
                        donutCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Cookie'){
                        cookieCal += mainVm.allMeals[i].calories
                    }
                }
                for (var i=0; i<mainVm.allMeals.length; i++){
                    if (mainVm.allMeals[i].foodname === 'Cupcake'){
                        cupcakeCal += mainVm.allMeals[i].calories
                    }
                }
                console.log('Cupcake/Cookie/Donut/Egg Calories: ', cupcakeCal, cookieCal, donutCal, eggCal)
                
                console.log('this is mainVM.allMeals:', mainVm.allMeals)
                
                
                // pie chart: calories by food
                var ctx = document.getElementById("theCanvas");
                var myChart = new Chart(ctx, {
                    type: 'pie',

                    data: {
                        datasets: [{
                            data: [eggCal, pancakeCal, cerealCal, oatmealCal, burritoCal, tacoCal, pizzaCal, cheeseburgerCal, hotdogCal, steakCal, lobsterCal, lasagnaCal, saladCal, jambalayaCal, granolabarCal, pretzelCal, donutCal, cookieCal, cupcakeCal], 
                            backgroundColor: [
                            'rgb(63, 112, 191)',
                            'rgb(78, 63, 191)',
                            'rgb(142, 63, 191)',
                            'rgb(191, 63, 176)',
                            'rgb(191, 78, 63)',
                            'rgb(191, 142, 63)',
                            'rgb(176, 191, 63)',
                            'rgb(63, 176, 191)',
                            'rgb(114, 137, 140)',
                            'rgb(140, 114, 124)',
                            'rgb(63, 127, 191)',
                            'rgb(63, 63, 191)',
                            'rgb(127, 191, 63)',
                            'rgb(191, 127, 63)',
                            'rgb(91, 26, 156)',
                            'rgb(91, 156, 26)',
                            'rgb(156, 26, 26)',
                            'rgb(156, 26, 91)',
                            'rgb(91, 156, 26)'
                            ]

                        }],

                        // These labels appear in the legend and in the tooltips when hovering different arcs
                        labels: [
                            'Egg',
                            'Pancake',
                            'Cereal',
                            'Oatmeal',
                            'Burrito',
                            'Taco',
                            'Pizza',
                            'Cheeseburger',
                            'Hotdog',
                            'Steak',
                            'Lobster',
                            'Salad', 
                            'Jambalya',
                            'Granola Bar',
                            'Pretzel',
                            'Donut',
                            'Cookie',
                            'Cupcake',
                        ],

                    },
                });
                var ctx2 = document.getElementById("theCanvas2");

                var myChart2 = new Chart(ctx2, {
                    type: 'pie',

                    data: {
                        datasets: [{
                            data: [breakCalories, lunchCalories, dinnerCalories, snackCalories], 
                            backgroundColor: [
                            'rgb(63, 112, 191)',
                            'rgb(78, 63, 191)',
                            'rgb(142, 63, 191)',
                            'rgb(191, 63, 176)',
                            ]

                        }],

                        // These labels appear in the legend and in the tooltips when hovering different arcs
                        labels: [
                            'Breakfast',
                            'Lunch',
                            'Dinner',
                            'Snack',
                        ],

                    },
                });

            })
        },
        
        

        
        


        
        createUser : function(event){
            event.preventDefault()
            var that = this;
            // inside of a vue method, we can use `this` to access any data or method on that VM.
            // always send an object when using AJAX
            console.log(this.newUserName)

            $.ajax({
                url: '/hawk-user',
                type: 'POST',
                data: JSON.stringify({username: this.newUserName, password: this.newUserPassword}),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: (dataFromServer) => {
                    console.log(dataFromServer)
                    if ( dataFromServer.success ) {
                        window.location.href="/dash.html"

                    }
                }
            });
        },

        signInUser : function(event){
            event.preventDefault()
            var that = this;
            // inside of a vue method, we can use `this` to access any data or method on that VM.
            // always send an object when using AJAX
            console.log(this.oldUserName)

            $.ajax({
                url: '/signin-user',
                type: 'POST',
                data: JSON.stringify({username: this.oldUserName, password: this.oldUserPassword}),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function(dataFromServer) {
                    console.log('line61: ', dataFromServer)
                    if ( dataFromServer.success ) {
                        window.location.href="/dash.html"
                    }
                }
            })
        },
        
        // getMeals: function(event){
        //     $.get('/all-meals', function(data){
        //         console.log(data[0])
        //         mainVm.allMeals = data
        //         console.log(mainVm.allMeals)
        //     })        
        // },

        createMeal : function(event){
            event.preventDefault()
            var that = this;
            // inside of a vue method, we can use `this` to access any data or method on that VM.
            // always send an object when using AJAX
            console.log(this.mealName)

            $.ajax({
                url: '/create-meal',
                type: 'POST',
                data: JSON.stringify({
                    _hawkuser: mainVm.user._id,
                    foodname: this.foodObj.text, 
                    mealname: this.mealName, 
                    calories: this.foodObj.value, 
                    mealdate: this.mealDate}),
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                success: function(dataFromServer) {
                    console.log(dataFromServer)
                    if ( dataFromServer.success ) {
                        mainVm.getMyMeals()
                        // only clear the form after we know the submission was successful
                        // we need to have a redirect here using window.location to the dashboard
                    }
                }
            });
        },

    },

})