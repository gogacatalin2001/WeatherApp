module VerifyExamples.Util.MinimumBy1 exposing (..)

-- This file got generated by [elm-verify-examples](https://github.com/stoeffel/elm-verify-examples).
-- Please don't modify this file by hand!

import Test
import Expect

import Util exposing (..)







spec1 : Test.Test
spec1 =
    Test.test "#minimumBy: \n\n    minimumBy .x []\n    --> Nothing" <|
        \() ->
            Expect.equal
                (
                minimumBy .x []
                )
                (
                Nothing
                )