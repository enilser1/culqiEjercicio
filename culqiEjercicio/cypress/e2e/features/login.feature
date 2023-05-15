Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given Ingresamos a la pagina de automationexercise
    Scenario: Login Exitoso
        When Colocamos el correo "enilser.munoz.soto@gmail.com", la contrasenia "Teamo111", and damos clic en Login
        Then se comprueba que se ingreso con exito
    Scenario: Login Fallido
        When Colocamos el correo "enilser.munoz.soto@gmail.com", la contrasenia "111", and damos clic en Login
        Then se comprueba que se ingreso sin exito