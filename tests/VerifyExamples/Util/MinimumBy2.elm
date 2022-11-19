module VerifyExamples.Util.MinimumBy2 exposing (..)

-- This file got generated by [elm-verify-examples](https://github.com/stoeffel/elm-verify-examples).
-- Please don't modify this file by hand!

import Test
import Expect

import Util exposing (..)







spec2 : Test.Test
spec2 =
    Test.test "#minimumBy: \n\n    minimumBy .x [ { x = 1, y = 2 } ]\n    --> Just {x = 1, y = 2}" <|
        \() ->
            Expect.equal
                (
                minimumBy .x [ { x = 1, y = 2 } ]
                )
                (
                Just {x = 1, y = 2}
                )