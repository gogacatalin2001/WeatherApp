module VerifyExamples.Util.ZipFilter1 exposing (..)

-- This file got generated by [elm-verify-examples](https://github.com/stoeffel/elm-verify-examples).
-- Please don't modify this file by hand!

import Test
import Expect

import Util exposing (..)







spec1 : Test.Test
spec1 =
    Test.test "#zipFilter: \n\n    zipFilter [ False, False ] [ 1, 2 ]\n    --> []" <|
        \() ->
            Expect.equal
                (
                zipFilter [ False, False ] [ 1, 2 ]
                )
                (
                []
                )