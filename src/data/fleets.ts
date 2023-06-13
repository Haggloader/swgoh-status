import { Farm } from '../things/farm'
import { FarmUnit, spacer } from '../things/farm-unit'
import { FarmCategory } from '../things/farm-category'

export default new FarmCategory(
    'Fleets',
    [
        new Farm(
            'Executor',
            'fleet',
            'dark',
            [
                new FarmUnit('Darth Vader', 7, 13, 7),
                new FarmUnit('Admiral Piett', 7, 13, 8),
                new FarmUnit('Boba Fett', 7, 13, 8),
                new FarmUnit('TIE Fighter Pilot', 7, 13, 5),
                new FarmUnit('Bossk', 7, 13, 5),
                new FarmUnit('IG-88', 7, 13, 5),
                new FarmUnit('Dengar', 7, 13, 5),
                spacer,
                new FarmUnit('Razor Crest', 7),
                new FarmUnit('Slave I', 7),
                new FarmUnit('IG-2000', 7),
                new FarmUnit('Hound\'s Tooth', 7),
                new FarmUnit('TIE Advanced x1', 7),
                new FarmUnit('Imperial TIE Bomber', 7),
                new FarmUnit('Imperial TIE Fighter', 7),
            ],
            [],
        ),
        new Farm(
            'Profundity',
            'fleet',
            'light',
            [
                new FarmUnit('Admiral Raddus', 7, 13, 9),
                new FarmUnit('Cassian Andor', 7, 13, 8),
                new FarmUnit('Dash Rendar', 7, 13, 7),
                new FarmUnit('Mon Mothma', 7, 13, 5),
                new FarmUnit('Bistan', 7, 13, 5),
                new FarmUnit('Jyn Erso', 7, 13, 5),
                new FarmUnit('Hera Syndulla', 7, 13, 5),
                spacer,
                new FarmUnit('Outrider', 7),
                new FarmUnit('Cassian\'s U-wing', 7),
                new FarmUnit('Bistan\'s U-wing', 7),
                new FarmUnit('Wedge Antilles\'s X-wing', 7),
                new FarmUnit('Biggs Darklighter\'s X-wing', 7),
                new FarmUnit('Rebel Y-wing', 7),
                new FarmUnit('Ghost', 7),
            ],
            [],
        ),
        new Farm( 
             'Leviathan', 
             'fleet', 
             'dark', 
             [ 
                 new FarmUnit('Darth Revan', 7, 13, 9), 
                 new FarmUnit('Darth Malak', 7, 13, 9), 
                 new FarmUnit('Sith Empire Trooper', 7, 13, 7),
		 new FarmUnit('Sith Trooper', 7, 13, 7),
		 new FarmUnit('Darth Maul', 7, 13, 7),
		 new FarmUnit('HK-47', 7, 13, 7),
		 new FarmUnit('Bastila Shan', 7, 13, 7),
		 new FarmUnit('Sith Assassin', 7, 13, 5),
                 new FarmUnit('50R-T', 7, 13, 5), 
                 spacer, 
                 new FarmUnit('Fury-Class Interceptor', 7), 
                 new FarmUnit('Mark VI Interceptor', 7), 
                 new FarmUnit('Tie Dagger', 7), 
                 new FarmUnit('B-28 Extinction-Class Bomber', 7), 
                 new FarmUnit('Scimitar', 7), 
                 new FarmUnit('Sith Fighter', 7), 
                 new FarmUnit('Ebon Hawk', 7), 
             ], 
             [], 
         ),
    ]
)
