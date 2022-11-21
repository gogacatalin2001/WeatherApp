module Util exposing (groupBy, maximumBy, maybeToList, minimumBy, zipFilter)

{-| Module containing utility functions
-}
import Html exposing (a)
import Html exposing (li)
import Chart exposing (list)
import Html exposing (ol)
import Maybe exposing (withDefault)


{-| Description for minimumBy

    minimumBy .x [ { x = 1, y = 2 } ] --> Just {x = 1, y = 2}

    minimumBy .x [] --> Nothing

    minimumBy (modBy 10) [ 16, 23, 14, 5 ] --> Just 23

-}
minimumBy : (a -> comparable) -> List a -> Maybe a
minimumBy criteria list =
    if list == [] then
        Nothing
    else
        list
            |> List.sortBy criteria
            |> List.head


{-| Description for maximumBy

    maximumBy .x [ { x = 1, y = 2 } ] --> Just {x = 1, y = 2}

    maximumBy .x [] --> Nothing

    maximumBy (modBy 10) [ 16, 23, 14, 5 ] --> Just 16

-}
maximumBy : (a -> comparable) -> List a -> Maybe a
maximumBy criteria list =
    if list == [] then
        Nothing
    else
        let
            lst = List.sortBy criteria list
            lastElem ls= 
                case ls of
                    [] -> Nothing
                    [last] -> Just last
                    _::xs -> lastElem xs
        in 
           lastElem lst


{-| Group a list

    groupBy .x [ { x = 1 } ] --> [(1, [{x = 1}])]

    groupBy (modBy 10) [ 11, 12, 21, 22 ] --> [(1, [11, 21]), (2, [12, 22])]

    groupBy identity [] --> []

-}
groupBy : (a -> b) -> List a -> List ( b, List a )
groupBy criteria list =
    let
        unique lst = 
            List.foldl
                (\a uniques ->
                    if List.member a uniques then
                        uniques
                    else
                        uniques ++ [a]
                )
                [] 
                lst
        keys = 
            list
                |> List.map criteria
                |> unique
        
        group kl lst =
            case kl of
                [] -> []
                k::ks ->
                    (k, List.filter (\x -> criteria x == k) lst) :: group ks lst
    in
        group keys list


{-| Transforms a Maybe into a List with one element for Just, and an empty list for Nothing

    maybeToList (Just 1) --> [1]

    maybeToList Nothing --> []

-}
maybeToList : Maybe a -> List a
maybeToList elem =
    case elem of
        Just e -> [e]
        Nothing -> []

{-| Filters a list based on a list of bools

    zipFilter [ True, True ] [ 1, 2 ] --> [1, 2]

    zipFilter [ False, False ] [ 1, 2 ] --> []

    zipFilter [ True, False, True, False ] [ 1, 2, 3, 4 ] --> [1, 3]

-}
zipFilter : List Bool -> List a -> List a
zipFilter mask list =
    let
        pairs =
            List.map2 Tuple.pair mask list
    in
        pairs
            |> List.filter (\(x,_) -> x == True)
            |> List.unzip
            |> Tuple.second