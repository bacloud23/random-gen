# Random-gen

This is an experiment. I do not pretend it is well secure. **This is a work in progress**

## Description

Many methods are used to generate pseudo-random values. **Random-gen** gets the *current time* eagerly on occasions (bootstrap, instanciating the basic class with *new* etc) and then generates a random number on demand again with a second *current time*.
