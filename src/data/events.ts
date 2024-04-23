import { Farm } from '../things/farm'
import { FarmUnit, spacer } from '../things/farm-unit'
import { FarmCategory } from '../things/farm-category'

export default new FarmCategory(
    'Events',
    [
        new Farm(
            'Grand Inquisitor',
            'event',
            'dark',
            [
                new FarmUnit('Second Sister', 7, 13, 5),
                new FarmUnit('Ninth Sister', 7, 13, 5),
                new FarmUnit('Seventh Sister', 7, 13, 5),
                new FarmUnit('Eighth Brother', 7, 13, 5),
                new FarmUnit('Fifth Brother', 7, 13, 5),
            ],
            [],
        ),
        new Farm(
            'Starkiller',
            'event',
            'dark',
            [
                new FarmUnit('Darth Talon', 7, 13, 5),
                new FarmUnit('Dash Rendar', 7, 13, 5),
                new FarmUnit('Kyle Katarn', 7, 13, 5),
                new FarmUnit('Mara Jade, The Emperor\'s Hand', 7, 13, 5),
            ],
            [],
        ),
        new Farm(
            'Jedi Knight Luke Skywalker',
            'event',
            'light',
            [
                new FarmUnit('C-3PO', 7, 13, 3),
                new FarmUnit('Captain Han Solo', 7, 13, 3),
                new FarmUnit('Chewbacca', 7, 13, 3),
                new FarmUnit('Commander Luke Skywalker', 7, 13, 3),
                new FarmUnit('Darth Vader', 7, 13, 3),
                new FarmUnit('Hermit Yoda', 7, 13, 3),
                new FarmUnit('Lando Calrissian', 7, 13, 3),
                new FarmUnit('Rebel Officer Leia Organa', 7, 13, 3),
                new FarmUnit('Wampa', 7, 13, 3),
            ],
            [
                new FarmUnit('Han\'s Millennium Falcon', 7),
                new FarmUnit('Wedge Antilles\'s X-wing', 7),
            ],
        ),
        new Farm(
            'General Skywalker',
            'event',
            'light',
            [
                new FarmUnit('Ahsoka Tano', 7, 12),
                new FarmUnit('C-3PO', 7, 12),
                new FarmUnit('General Kenobi', 7, 12),
                new FarmUnit('Padmé Amidala', 7, 12),
                new FarmUnit('Shaak Ti', 7, 12),
                spacer,
                new FarmUnit('Asajj Ventress', 7, 12),
                new FarmUnit('B1 Battle Droid', 7, 12),
                new FarmUnit('B2 Super Battle Droid', 7, 12),
                new FarmUnit('Droideka', 7, 12),
                new FarmUnit('IG-100 MagnaGuard', 7, 12),
            ],
            [
                new FarmUnit('Anakin\'s Eta-2 Starfighter', 7),
            ],
        ),
        new Farm(
            'Darth Malak',
            'event',
            'dark',
            [
                new FarmUnit('Bastila Shan', 7, 12),
                new FarmUnit('Jolee Bindo', 7, 12),
                new FarmUnit('Mission Vao', 7, 12),
                new FarmUnit('T3-M4', 7, 12),
                new FarmUnit('Zaalbar', 7, 12),
                new FarmUnit('Jedi Knight Revan', 7, 12),
                spacer,
                new FarmUnit('Bastila Shan (Fallen)', 7, 12),
                new FarmUnit('Carth Onasi', 7, 12),
                new FarmUnit('Canderous Ordo', 7, 12),
                new FarmUnit('HK-47', 7, 12),
                new FarmUnit('Juhani', 7, 12),
                new FarmUnit('Darth Revan', 7, 12),
            ],
            [],
        ),
		new Farm(
            'Doctor Aphra',
            'event',
            'dark',
            [
                new FarmUnit('Hondo Ohnaka', 7, 13, 5),
                new FarmUnit('0-0-0', 7, 13, 5),
                new FarmUnit('BT-1', 7, 13, 5),
                new FarmUnit('Sana Starros', 7, 13, 5),
            ],
            [],
        ),
		new Farm(
            'Jedi Knight Cal Kestis',
            'event',
            'light',
            [
                new FarmUnit('Cal Kestis', 7, 12),
                new FarmUnit('Cere Junda', 7, 12),
                new FarmUnit('Merrin', 7, 12),
                new FarmUnit('Tarfful', 7, 12),
                new FarmUnit('Saw Gerrera', 7, 12),
            ],
            [],
        ),
		new Farm(
            'Bo-Katan Mand´alor',
            'event',
            'light',
            [
                new FarmUnit('Kelleran Beq', 7, 12),
                new FarmUnit('Paz Vizsla', 7, 12),
                new FarmUnit('IG-12 & Grogu', 7, 12),
                new FarmUnit('The Mandalorian', 7, 12),
            ],
            [],
        ),
        new Farm(
            'Gungans',
            'event',
            'light',
            [
                new FarmUnit('Boss Nass', 7, 12, 5),
                new FarmUnit('Captain Tarpals', 7, 12, 5),
                new FarmUnit('Gungan Boomadier', 7, 12, 5),
                new FarmUnit('Gungan Phalanx', 7, 12, 5),
            ],
            [],
        )    
    ]
)
