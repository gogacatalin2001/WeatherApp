module Util exposing (groupBy, maximumBy, maybeToList, minimumBy, zipFilter)

{-| Module containing utility functions
-}


{-| Description for minimumBy

    minimumBy .x [ { x = 1, y = 2 } ] --> Just {x = 1, y = 2}

    minimumBy .x [] --> Nothing

    minimumBy (modBy 10) [ 16, 23, 14, 5 ] --> Just 23

-}
minimumBy : (a -> comparable) -> List a -> Maybe a
minimumBy _ _ =
    -- Nothging
    Debug.todo "Implement Util.minimumBy"


{-| Description for maximumBy

    maximumBy .x [ { x = 1, y = 2 } ] --> Just {x = 1, y = 2}

    maximumBy .x [] --> Nothing

    maximumBy (modBy 10) [ 16, 23, 14, 5 ] --> Just 16

-}
maximumBy : (a -> comparable) -> List a -> Maybe a
maximumBy _ _ =
    -- Nothging
    Debug.todo "Implement Util.maximumBy"


{-| Group a list

    groupBy .x [ { x = 1 } ] --> [(1, [{x = 1}])]

    groupBy (modBy 10) [ 11, 12, 21, 22 ] --> [(1, [11, 21]), (2, [12, 22])]

    groupBy identity [] --> []

-}
groupBy : (a -> b) -> List a -> List ( b, List a )
groupBy _ _ =
    -- []
    Debug.todo "Implement Util.groupBy"


{-| Transforms a Maybe into a List with one element for Just, and an empty list for Nothing

    maybeToList (Just 1) --> [1]

    maybeToList Nothing --> []

-}
maybeToList : Maybe a -> List a
maybeToList _ =
    -- []
    Debug.todo "Implement Util.maybeToList"


{-| Filters a list based on a list of bools

    zipFilter [ True, True ] [ 1, 2 ] --> [1, 2]

    zipFilter [ False, False ] [ 1, 2 ] --> []

    zipFilter [ True, False, True, False ] [ 1, 2, 3, 4 ] --> [1, 3]

-}
zipFilter : List Bool -> List a -> List a
zipFilter _ _ =
    -- []
    Debug.todo "Implement Util.zipFilter"
