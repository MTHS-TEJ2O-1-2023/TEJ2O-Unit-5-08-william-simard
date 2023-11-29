/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: william simard
 * Created on: Nov 2023
 * This program turns a 2 - 28BYJ-48 DC 5V until a sonar sensor senses an object 10cm away
*/

// variable
let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

while (true) {
    if (input.buttonIsPressed(Button.A) === true) {
        // find distance from sonar
        basic.clearScreen()
        distanceToObject = sonar.ping(
            DigitalPin.P1,
            DigitalPin.P2,
            PingUnit.Centimeters
        )
        basic.showNumber(distanceToObject)
        basic.pause(500)
        basic.showIcon(IconNames.Happy)

        if (distanceToObject < 10) {
            robotbit.StpCarMove(-10, 48)
            basic.pause(500)
            robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4)
            basic.pause(500)
            robotbit.StepperTurn(robotbit.Steppers.M2, robotbit.Turns.T1B4)
            basic.pause(500)
            robotbit.StpCarMove(10, 48)
        }
    }
}