var Q=0;
var H=0;
var P=0;
var S=0;
var i=0;
var punteo=0;   
var x=
    [
    0,
    0,
    0,
    0,
    0
    ];

    var preguntas =
     [
        "¿Qué es el COVID-19?",
        "¿Qué significa AM en Telecomunicaciones",
        "¿Quién es la persona mas rapida del mundo?",
        "¿Quién escribió el Quijote de la mancha?",
        "¿En qué año empezó la segunda guerra mundial"
    ];
  
    var respuesta= 
    [               
        "Un Virus",
        "Una Bacteria",
        "Una Celula animal",
        "Un Hongo",                  
        "Modulación Aérea",
        "Medio de Amplitud",
        "Mas Amortiguamiento",
        "Modulación de Amplitud",                  
        "Elon musk",
        "Harry Potter",
        "Usain Bolt",
        "Mariana Pajón",
        "German Castro Caicedo",
        "Gabriel García Márquez",
        "Miguel de Cervantes Saavedra",
        "william shakespeare",
        "1942",
        "1939",
        "1945",
        "1938"
    ];
    var res=
    [
        1,
        4,
        3,
        3,
        2
    ]; 
    var Condicion =
    [
        "Correcto",
        "Incorreto",
        "   "
    ];


    function contar()
    {   
        Q++;
        i++;
        P=P+4;
        if(Q==5)
        {
            Q=0;
            punteo=0;
            document.getElementById("cuadro_9").innerHTML =punteo; 
        }
        if(i==5)
        {
            i=0;
        }
        if(P==20)
        {
            P=0;
        }
        S=3;
        document.getElementById("cuadro_2").innerHTML = Condicion[S];
        document.getElementById("cuadro_1").innerHTML = preguntas[Q];
        document.getElementById("cuadro_4").innerHTML = respuesta[P];
        document.getElementById("cuadro_5").innerHTML = respuesta[P+1];
        document.getElementById("cuadro_6").innerHTML = respuesta[P+2];
        document.getElementById("cuadro_7").innerHTML = respuesta[P+3];
    }

       function boton1()
       {
        H=1;
        prueba();
       }
    
       function boton2()
       {
        H=2;
        prueba();
       }
       function boton3()
       {
        H=3;
        prueba();
       }
       function boton4()
       {
        H=4;
        prueba();
       }

    function prueba()
    {   
        if (res[i]==H)
        {
            S=0;
            punteo++;
            document.getElementById("cuadro_2").innerHTML =Condicion[S];   
            
        }        
        else 
        {
            S=1;
            document.getElementById("cuadro_2").innerHTML =Condicion[S];  
        } 
        document.getElementById("cuadro_9").innerHTML =punteo; 
    }
    

