module VerifyExamples.Util.MinimumBy0 exposing (..)

-- This file got generated by [elm-verify-examples](https://github.com/stoeffel/elm-verify-examples).
-- Please don't modify this file by hand!

import Test
import Expect

import Util exposing (..)







spec0 : Test.Test
spec0 =
    Test.test "#minimumBy: \n\n    minimumBy (modBy 10) [ 16, 23, 14, 5 ]\n    --> Just 23" <|
        \() ->
            Expect.equal
                (
                minimumBy (modBy 10) [ 16, 23, 14, 5 ]
                )
                (
                Just 23
                )