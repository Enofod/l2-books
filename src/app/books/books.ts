export type AvailableClass =
    'Abyss Walker' |
    'Arcana Lord' |
    'Archmage' |
    'Artisan' |
    'Assassin' |
    'Bishop' |
    'Bladedancer' |
    'Cardinal' |
    'Cleric' |
    'Dark Avenger' |
    'Dark Fighter' |
    'Dark Mystic' |
    'Dark Wizard' |
    'Dominator' |
    'Doomcryer' |
    'Elemental Master' |
    'Elemental Summoner' |
    'Elven Elder' |
    'Elven Fighter' |
    'Elven Knight' |
    'Elven Mystic' |
    'Elven Oracle' |
    'Elven Scout' |
    'Elven Wizard' |
    "Eva's Saint" |
    'Hierophant' |
    'Human Knight' |
    'Human Mystic' |
    'Human Wizard' |
    'Mystic Muse' |
    'Necromancer' |
    'Orc Mystic' |
    'Orc Mystics' |
    'Orc Shaman' |
    'Overlord' |
    'Paladin' |
    'Palus Knight' |
    'Phantom Ranger' |
    'Phantom Summoner' |
    'Plainswalker' |
    'Prophet' |
    'Shillien Elder' |
    'Shillien Knight' |
    'Shillien Oracle' |
    'Shillien Saint' |
    'Silver Ranger' |
    'Sorcerer' |
    'Soultaker' |
    'Spellhowler' |
    'Spellsinger' |
    'Spectral Master' |
    'Storm Screamer' |
    'Swordsinger' |
    'Temple Knight' |
    'Warcryer' |
    'Warlock' |
    'Warsmith';

    export const availableClasses: AvailableClass[] = [
        'Abyss Walker',
        'Arcana Lord',
        'Archmage',
        'Artisan',
        'Assassin',
        'Bishop',
        'Bladedancer',
        'Cardinal',
        'Cleric',
        'Dark Avenger',
        'Dark Fighter',
        'Dark Mystic',
        'Dark Wizard',
        'Dominator',
        'Doomcryer',
        'Elemental Master',
        'Elemental Summoner',
        'Elven Elder',
        'Elven Fighter',
        'Elven Knight',
        'Elven Mystic',
        'Elven Oracle',
        'Elven Scout',
        'Elven Wizard',
        "Eva's Saint",
        'Hierophant',
        'Human Knight',
        'Human Mystic',
        'Human Wizard',
        'Mystic Muse',
        'Necromancer',
        'Orc Mystic',
        'Orc Mystics',
        'Orc Shaman',
        'Overlord',
        'Paladin',
        'Palus Knight',
        'Phantom Ranger',
        'Phantom Summoner',
        'Plainswalker',
        'Prophet',
        'Shillien Elder',
        'Shillien Knight',
        'Shillien Oracle',
        'Shillien Saint',
        'Silver Ranger',
        'Sorcerer',
        'Soultaker',
        'Spellhowler',
        'Spellsinger',
        'Spectral Master',
        'Storm Screamer',
        'Swordsinger',
        'Temple Knight',
        'Warcryer',
        'Warlock',
        'Warsmith'
    ];

export type Book = {
    itemName: string
    name: string
    used_classes: AvailableClass[]
    available_at_shop: boolean
    drop_info: DropInfo[]

}

export type DropInfo = {
    npcName: string
    name: string
    chance: number
}

export const BOOKS: Book[] = [
    {
        "itemName": "sb_light",
        "used_classes": [],
        "available_at_shop": false,
        "drop_info": [],
        "name": "Spellbook: Light"
    },
    {
        "itemName": "sb_might1",
        "used_classes": [
            "Human Mystic",
            "Elven Mystic",
            "Dark Mystic"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Might"
    },
    {
        "itemName": "sb_ice_bolt1",
        "used_classes": [
            "Human Mystic",
            "Elven Mystic",
            "Dark Mystic"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Ice Bolt"
    },
    {
        "itemName": "sb_battle_heal1",
        "used_classes": [
            "Human Mystic",
            "Elven Mystic",
            "Dark Mystic"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Battle Heal"
    },
    {
        "itemName": "sb_vampiric_touch1",
        "used_classes": [
            "Human Mystic",
            "Dark Mystic"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Vampiric Touch"
    },
    {
        "itemName": "sb_flame_strike1",
        "used_classes": [
            "Human Wizard",
            "Elven Wizard",
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Flame Strike"
    },
    {
        "itemName": "sb_cure_poison1",
        "used_classes": [
            "Human Mystic",
            "Elven Mystic",
            "Dark Mystic"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Cure Poison "
    },
    {
        "itemName": "sb_group_heal1",
        "used_classes": [
            "Human Mystic",
            "Elven Mystic",
            "Dark Mystic"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Group Heal "
    },
    {
        "itemName": "sb_curse_poison1",
        "used_classes": [
            "Human Mystic",
            "Dark Mystic"
        ],
        "available_at_shop": false,
        "drop_info": [],
        "name": "Spellbook: Curse: Poison"
    },
    {
        "itemName": "sb_curse_weakness",
        "used_classes": [
            "Human Mystic",
            "Elven Mystic"
        ],
        "available_at_shop": false,
        "drop_info": [],
        "name": "Spellbook: Curse: Weakness"
    },
    {
        "itemName": "sb_summon_meal",
        "used_classes": [
            "Human Mystic",
            "Elven Mystic"
        ],
        "available_at_shop": false,
        "drop_info": [],
        "name": "Spellbook: Summon Meal"
    },
    {
        "itemName": "sb_shield1",
        "used_classes": [
            "Human Mystic",
            "Elven Mystic",
            "Dark Mystic"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Shield"
    },
    {
        "itemName": "sb_know_enemy",
        "used_classes": [],
        "available_at_shop": false,
        "drop_info": [],
        "name": "Spellbook: Know Enemy"
    },
    {
        "itemName": "sb_advanced_attack_power1",
        "used_classes": [
            "Elven Fighter",
            "Dark Fighter"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Aura Attack"
    },
    {
        "itemName": "sb_elemental_heal1",
        "used_classes": [
            "Elven Fighter"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Elemental Heal"
    },
    {
        "itemName": "sb_drain_energy1",
        "used_classes": [
            "Human Knight",
            "Dark Fighter"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Drain Health"
    },
    {
        "itemName": "sb_wind_walk1",
        "used_classes": [
            "Cleric",
            "Elven Oracle",
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Wind Walk"
    },
    {
        "itemName": "sb_breeze1",
        "used_classes": [
            "Elven Mystic",
            "Dark Mystic"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Wind Shackle"
    },
    {
        "itemName": "sb_wind_strike1",
        "used_classes": [],
        "available_at_shop": false,
        "drop_info": [],
        "name": "Spellbook: Wind Strike"
    },
    {
        "itemName": "sb_self_heal",
        "used_classes": [],
        "available_at_shop": false,
        "drop_info": [],
        "name": "Spellbook: Self Heal"
    },
    {
        "itemName": "sb_heal1",
        "used_classes": [
            "Human Mystic",
            "Elven Mystic",
            "Dark Mystic"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Heal"
    },
    {
        "itemName": "sb_adv_defence_power1",
        "used_classes": [
            "Elven Fighter",
            "Dark Fighter"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Aura Defense"
    },
    {
        "itemName": "sb_aqua_swirl1",
        "used_classes": [
            "Elven Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Aqua Swirl "
    },
    {
        "itemName": "sb_twister1",
        "used_classes": [
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Twister"
    },
    {
        "itemName": "sb_blaze1",
        "used_classes": [
            "Human Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Blaze"
    },
    {
        "itemName": "sb_poison_recovery1",
        "used_classes": [
            "Elven Knight",
            "Elven Scout"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Poison Recovery"
    },
    {
        "itemName": "sb_touch_of_god1",
        "used_classes": [
            "Human Knight"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Divine Heal"
    },
    {
        "itemName": "sb_cure_bleeding1",
        "used_classes": [
            "Elven Scout"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Cure Bleeding"
    },
    {
        "itemName": "sb_zero_g1",
        "used_classes": [
            "Elven Knight",
            "Elven Scout"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Entangle"
    },
    {
        "itemName": "sb_freezing_strike1",
        "used_classes": [
            "Palus Knight",
            "Assassin"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Freezing Strike"
    },
    {
        "itemName": "sb_power_break1",
        "used_classes": [
            "Palus Knight",
            "Assassin"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Power Break"
    },
    {
        "itemName": "sb_poison1",
        "used_classes": [
            "Palus Knight",
            "Assassin"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Poison"
    },
    {
        "itemName": "sb_speed_walk1",
        "used_classes": [
            "Elven Knight",
            "Elven Scout"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Sprint"
    },
    {
        "itemName": "sb_recharge1",
        "used_classes": [
            "Elven Oracle",
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Recharge"
    },
    {
        "itemName": "sb_disrupt_undead1",
        "used_classes": [
            "Cleric",
            "Elven Oracle",
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Disrupt Undead"
    },
    {
        "itemName": "sb_resist_poison1",
        "used_classes": [
            "Elven Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Resist Poison"
    },
    {
        "itemName": "sb_mental_shield1",
        "used_classes": [
            "Cleric",
            "Elven Oracle",
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Mental Shield"
    },
    {
        "itemName": "sb_holy_weapon1",
        "used_classes": [
            "Cleric",
            "Elven Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Holy Weapon"
    },
    {
        "itemName": "sb_regeneration1",
        "used_classes": [
            "Cleric",
            "Elven Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Regeneration"
    },
    {
        "itemName": "sb_empower1",
        "used_classes": [
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Empower"
    },
    {
        "itemName": "sb_berserker_spirit1",
        "used_classes": [
            "Cleric"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Berserker Spirit"
    },
    {
        "itemName": "sb_quickness1",
        "used_classes": [],
        "available_at_shop": false,
        "drop_info": [],
        "name": "Spellbook: Quickness"
    },
    {
        "itemName": "sb_sleep1",
        "used_classes": [
            "Human Wizard",
            "Cleric",
            "Elven Wizard",
            "Elven Oracle",
            "Dark Wizard",
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Sleep"
    },
    {
        "itemName": "sb_erase_hostility1",
        "used_classes": [
            "Cleric"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Peace"
    },
    {
        "itemName": "sb_focus1",
        "used_classes": [
            "Cleric",
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Focus"
    },
    {
        "itemName": "sb_concentration1",
        "used_classes": [
            "Human Wizard",
            "Cleric",
            "Elven Wizard",
            "Elven Oracle",
            "Dark Wizard",
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Concentration"
    },
    {
        "itemName": "sb_surrender_to_fire1",
        "used_classes": [
            "Human Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Surrender To Fire"
    },
    {
        "itemName": "sb_arcane_acumen1",
        "used_classes": [
            "Cleric"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Acumen"
    },
    {
        "itemName": "sb_agility1",
        "used_classes": [
            "Elven Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Agility"
    },
    {
        "itemName": "sb_summon_blackcat1",
        "used_classes": [
            "Human Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Summon Kat the Cat"
    },
    {
        "itemName": "sb_servitor_mana_charge1",
        "used_classes": [
            "Human Wizard",
            "Elven Wizard",
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Servitor Recharge"
    },
    {
        "itemName": "sb_servitor_heal1",
        "used_classes": [
            "Human Wizard",
            "Elven Wizard",
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Servitor Heal"
    },
    {
        "itemName": "sb_fast_servitor1",
        "used_classes": [
            "Human Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Servitor Wind Walk"
    },
    {
        "itemName": "sb_bright_servitor1",
        "used_classes": [
            "Elven Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Servitor Magic Boost"
    },
    {
        "itemName": "sb_mighty_servitor1",
        "used_classes": [
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Mighty Servitor"
    },
    {
        "itemName": "sb_slow1",
        "used_classes": [
            "Human Wizard",
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Slow"
    },
    {
        "itemName": "sb_poison_cloud1",
        "used_classes": [
            "Human Wizard",
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Poisonous Cloud"
    },
    {
        "itemName": "sb_aura_burn1",
        "used_classes": [
            "Human Wizard",
            "Elven Wizard",
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Aura Burn"
    },
    {
        "itemName": "sb_auqa_resist1",
        "used_classes": [
            "Elven Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Resist Aqua"
    },
    {
        "itemName": "sb_wind_resist1",
        "used_classes": [
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Resist Wind"
    },
    {
        "itemName": "sb_fire_resist1",
        "used_classes": [
            "Cleric"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Resist Fire"
    },
    {
        "itemName": "sb_dryad_root1",
        "used_classes": [
            "Cleric",
            "Elven Oracle",
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Dryad Root"
    },
    {
        "itemName": "sb_curse_bleary1",
        "used_classes": [
            "Human Wizard",
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Curse of Chaos"
    },
    {
        "itemName": "sb_surrender_to_earth1",
        "used_classes": [
            "Elven Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Surrender To Earth"
    },
    {
        "itemName": "sb_surrender_to_poison1",
        "used_classes": [
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Surrender To Poison"
    },
    {
        "itemName": "sb_confusion1",
        "used_classes": [
            "Palus Knight",
            "Assassin"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Confusion"
    },
    {
        "itemName": "sb_charm11",
        "used_classes": [
            "Elven Knight",
            "Elven Scout"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Charm"
    },
    {
        "itemName": "sb_resurrection1",
        "used_classes": [
            "Cleric",
            "Elven Oracle",
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Resurrection"
    },
    {
        "itemName": "sb_water_breathing",
        "used_classes": [
            "Cleric",
            "Elven Oracle",
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Kiss of Eva"
    },
    {
        "itemName": "sb_corpse_life_drain1",
        "used_classes": [
            "Human Wizard",
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Corpse Life Drain"
    },
    {
        "itemName": "sb_body_to_mind1",
        "used_classes": [
            "Human Wizard",
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Body To Mind"
    },
    {
        "itemName": "sb_pure_inspiration1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Flame Chant"
    },
    {
        "itemName": "sb_power_of_paagrio1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Power Of Paagrio"
    },
    {
        "itemName": "sb_blessing_of_paagrio1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Blessing Of Paagrio"
    },
    {
        "itemName": "sb_burning_spirit1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Chant of Fire"
    },
    {
        "itemName": "sb_mass_frenzy1",
        "used_classes": [
            "Orc Mystics"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Chant of Battle"
    },
    {
        "itemName": "sb_devotioin_of_soul1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Chant of Shielding"
    },
    {
        "itemName": "sb_devotioin_of_shine1",
        "used_classes": [
            "Orc Mystics"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Soul Shield"
    },
    {
        "itemName": "sb_blood_lust1",
        "used_classes": [
            "Orc Mystics"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Life Drain"
    },
    {
        "itemName": "sb_external_fear1",
        "used_classes": [
            "Orc Mystics"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Fear"
    },
    {
        "itemName": "sb_pain_thorn1",
        "used_classes": [
            "Orc Mystics"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Venom"
    },
    {
        "itemName": "sb_engrave_seal_of_timid1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Seal of Chaos"
    },
    {
        "itemName": "sb_night_murmur1",
        "used_classes": [
            "Orc Mystics"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Dreaming Spirit"
    },
    {
        "itemName": "sb_engrave_seal_of_lazy1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Seal of Slow"
    },
    {
        "itemName": "sb_chill_flame1",
        "used_classes": [
            "Orc Mystics"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Chill Flame"
    },
    {
        "itemName": "sb_eternal_flame1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Blaze Quake"
    },
    {
        "itemName": "sb_aura_sway1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Aura Sink"
    },
    {
        "itemName": "sb_entice_madness1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Madness"
    },
    {
        "itemName": "sb_blaze_quake1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Frost Flame"
    },
    {
        "itemName": "sb_bind_will1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Seal of Binding"
    },
    {
        "itemName": "sb_pain_edge1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Seal of Poison"
    },
    {
        "itemName": "sb_summon_shadow1",
        "used_classes": [
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Summon Shadow"
    },
    {
        "itemName": "sb_summon_cuti_cat1",
        "used_classes": [
            "Human Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Summon Mew the Cat"
    },
    {
        "itemName": "sb_summon_unicorn_boxer1",
        "used_classes": [
            "Elven Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Summon Unicorn Boxer"
    },
    {
        "itemName": "sb_summon_unicorn_mirage1",
        "used_classes": [
            "Elven Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Summon Unicorn Mirage"
    },
    {
        "itemName": "sb_summon_silhouette1",
        "used_classes": [
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Summon Silhouette"
    },
    {
        "itemName": "sb_inspire_life_force1",
        "used_classes": [
            "Orc Shaman"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Amulet: Chant of Life"
    },
    {
        "itemName": "sb_summon_mechanic_golem1",
        "used_classes": [
            "Artisan"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Blueprint: Summon Mechanic Golem"
    },
    {
        "itemName": "sb_summon_storm_cubic1",
        "used_classes": [
            "Temple Knight",
            "Warlock"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "manashen",
                "name": "Manashen Gargoyle",
                "chance": 0.5845576348999999
            }
        ],
        "name": "Spellbook: Summon Storm Cubic"
    },
    {
        "itemName": "sb_summon_vampiric_cubic1",
        "used_classes": [
            "Shillien Knight"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ti_mi_kran",
                "name": "Valley Treant",
                "chance": 1.0494598638000001
            }
        ],
        "name": "Spellbook: Summon Vampiric Cubic"
    },
    {
        "itemName": "sb_summon_poltergeist_cubic1",
        "used_classes": [
            "Shillien Knight",
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "manashen",
                "name": "Manashen Gargoyle",
                "chance": 0.5845576348999999
            }
        ],
        "name": "Spellbook: Summon Phantom Cubic"
    },
    {
        "itemName": "sb_life_scavenge1",
        "used_classes": [
            "Dark Avenger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "manashen",
                "name": "Manashen Gargoyle",
                "chance": 0.5845576348999999
            }
        ],
        "name": "Spellbook: Life Scavenge"
    },
    {
        "itemName": "sb_holy_strike1",
        "used_classes": [
            "Paladin"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "liele_elder",
                "name": "Liele Elder",
                "chance": 1.1900999358
            }
        ],
        "name": "Spellbook: Holy Strike"
    },
    {
        "itemName": "sb_horror1",
        "used_classes": [
            "Dark Avenger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "liele_elder",
                "name": "Liele Elder",
                "chance": 1.1900999358
            }
        ],
        "name": "Spellbook: Horror"
    },
    {
        "itemName": "sb_summon_life_cubic1",
        "used_classes": [
            "Temple Knight",
            "Elemental Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "pan_ruem",
                "name": "Satyr",
                "chance": 1.4428240332000002
            }
        ],
        "name": "Spellbook: Summon Life Cubic"
    },
    {
        "itemName": "sb_sacrifice1",
        "used_classes": [
            "Paladin"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "unicorn_elder",
                "name": "Unicorn Elder",
                "chance": 1.3380531668
            }
        ],
        "name": "Spellbook: Sacrifice"
    },
    {
        "itemName": "sb_iron_will1",
        "used_classes": [
            "Paladin",
            "Dark Avenger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "pan_ruem",
                "name": "Satyr",
                "chance": 1.4428240332000002
            }
        ],
        "name": "Spellbook: Iron Will"
    },
    {
        "itemName": "sb_reflect_damage1",
        "used_classes": [
            "Dark Avenger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_monstereye",
                "name": "Enchanted Monstereye",
                "chance": 0.51112
            }
        ],
        "name": "Spellbook: Reflect Damage"
    },
    {
        "itemName": "sb_corpse_plague1",
        "used_classes": [
            "Dark Avenger",
            "Shillien Knight"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ti_mi_kran_elder",
                "name": "Valley treant Elder",
                "chance": 1.1795308056000002
            }
        ],
        "name": "Spellbook: Corpse Plague"
    },
    {
        "itemName": "sb_hex1",
        "used_classes": [
            "Shillien Knight",
            "Bladedancer",
            "Abyss Walker",
            "Phantom Ranger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_monstereye",
                "name": "Enchanted Monstereye",
                "chance": 0.51112
            }
        ],
        "name": "Spellbook: Hex"
    },
    {
        "itemName": "sb_spirit_barrier1",
        "used_classes": [
            "Temple Knight",
            "Swordsinger",
            "Plainswalker",
            "Silver Ranger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_monstereye",
                "name": "Enchanted Monstereye",
                "chance": 0.51112
            }
        ],
        "name": "Spellbook: Spirit Barrier"
    },
    {
        "itemName": "sb_hamstring1",
        "used_classes": [
            "Dark Avenger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "pan_ruem",
                "name": "Satyr",
                "chance": 1.4428240332000002
            }
        ],
        "name": "Spellbook: Hamstring"
    },
    {
        "itemName": "sb_holy_blessing11",
        "used_classes": [
            "Paladin"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_stone_golem",
                "name": "Enchanted Stone Golem",
                "chance": 0.73775
            }
        ],
        "name": "Spellbook: Holy Blessing"
    },
    {
        "itemName": "sb_summon_viper_cubic1",
        "used_classes": [
            "Shillien Knight"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "pan_ruem_elder",
                "name": "Satyr Elder",
                "chance": 1.4493798064
            }
        ],
        "name": "Spellbook: Summon Viper Cubic"
    },
    {
        "itemName": "sb_lightening_strike1",
        "used_classes": [
            "Shillien Knight"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "unicorn_elder",
                "name": "Unicorn Elder",
                "chance": 1.0704404996
            }
        ],
        "name": "Spellbook: Lightening Strike"
    },
    {
        "itemName": "sb_summon_dark_panther1",
        "used_classes": [
            "Dark Avenger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_stone_golem",
                "name": "Enchanted Stone Golem",
                "chance": 0.73775
            }
        ],
        "name": "Spellbook: Summon Dark Panther"
    },
    {
        "itemName": "sb_summon_skeletonwarrior1",
        "used_classes": [
            "Necromancer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "pan_ruem",
                "name": "Satyr",
                "chance": 1.3866091276000003
            }
        ],
        "name": "Spellbook: Summon Reanimated Man "
    },
    {
        "itemName": "sb_summon_zombi1",
        "used_classes": [
            "Necromancer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_stone_golem",
                "name": "Enchanted Stone Golem",
                "chance": 0.73775
            }
        ],
        "name": "Spellbook: Summon Corrupted Man"
    },
    {
        "itemName": "sb_corpse_burst1",
        "used_classes": [
            "Necromancer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ti_mi_kran_elder",
                "name": "Valley treant Elder",
                "chance": 1.0897791912
            }
        ],
        "name": "Spellbook: Corpse Burst"
    },
    {
        "itemName": "sb_forget",
        "used_classes": [
            "Necromancer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "unicorn",
                "name": "Unicorn",
                "chance": 1.2408967539
            }
        ],
        "name": "Spellbook: Forget"
    },
    {
        "itemName": "sb_curse_discord1",
        "used_classes": [
            "Necromancer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_iron_golem",
                "name": "Enchanted Iron Golem",
                "chance": 0.77365
            }
        ],
        "name": "Spellbook: Curse Discord"
    },
    {
        "itemName": "sb_curse_fear1",
        "used_classes": [
            "Necromancer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_iron_golem",
                "name": "Enchanted Iron Golem",
                "chance": 0.77365
            }
        ],
        "name": "Spellbook: Curse Fear"
    },
    {
        "itemName": "sb_anchor1",
        "used_classes": [
            "Necromancer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "unicorn",
                "name": "Unicorn",
                "chance": 1.2408967539
            }
        ],
        "name": "Spellbook: Anchor"
    },
    {
        "itemName": "sb_silence1",
        "used_classes": [
            "Necromancer",
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_iron_golem",
                "name": "Enchanted Iron Golem",
                "chance": 0.77365
            }
        ],
        "name": "Spellbook: Silence"
    },
    {
        "itemName": "sb_death_spike1",
        "used_classes": [
            "Necromancer",
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "unicorn",
                "name": "Unicorn",
                "chance": 1.2408967539
            }
        ],
        "name": "Spellbook: Death Spike"
    },
    {
        "itemName": "sb_curse_death_link1",
        "used_classes": [
            "Necromancer",
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "unicorn_elder",
                "name": "Unicorn Elder",
                "chance": 1.3380531668
            }
        ],
        "name": "Spellbook: Curse Death Link"
    },
    {
        "itemName": "sb_vampiric_claw11",
        "used_classes": [
            "Necromancer",
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_gargoyle",
                "name": "Enchanted Gargoyle",
                "chance": 0.806525
            }
        ],
        "name": "Spellbook: Vampiric Claw"
    },
    {
        "itemName": "sb_vitalize1",
        "used_classes": [
            "Bishop",
            "Elven Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ti_mi_kran_elder",
                "name": "Valley treant Elder",
                "chance": 1.0897791912
            }
        ],
        "name": "Spellbook: Vitalize"
    },
    {
        "itemName": "sb_repose1",
        "used_classes": [
            "Bishop"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "unicorn",
                "name": "Unicorn",
                "chance": 1.2408967539
            }
        ],
        "name": "Spellbook: Repose"
    },
    {
        "itemName": "sb_hold_undead1",
        "used_classes": [
            "Bishop"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ti_mi_kran_elder",
                "name": "Valley treant Elder",
                "chance": 1.0897791912
            }
        ],
        "name": "Spellbook: Hold Undead"
    },
    {
        "itemName": "sb_requiem1",
        "used_classes": [
            "Bishop"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_gargoyle",
                "name": "Enchanted Gargoyle",
                "chance": 0.806525
            }
        ],
        "name": "Spellbook: Requiem"
    },
    {
        "itemName": "sb_purify1",
        "used_classes": [
            "Bishop",
            "Shillien Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "forest_runner",
                "name": "Forest Runner",
                "chance": 1.188325
            }
        ],
        "name": "Spellbook: Purify"
    },
    {
        "itemName": "sb_might_of_heaven11",
        "used_classes": [
            "Bishop",
            "Elven Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_gargoyle",
                "name": "Enchanted Gargoyle",
                "chance": 0.806525
            }
        ],
        "name": "Spellbook: Might Of Heaven"
    },
    {
        "itemName": "sb_surrender_to_wind1",
        "used_classes": [
            "Sorcerer",
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_gargoyle",
                "name": "Enchanted Gargoyle",
                "chance": 0.806525
            }
        ],
        "name": "Spellbook: Surrender to Wind"
    },
    {
        "itemName": "sb_blazing_circle1",
        "used_classes": [
            "Sorcerer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "shackle",
                "name": "Shackle",
                "chance": 0.716775
            }
        ],
        "name": "Spellbook: Blazing Circle"
    },
    {
        "itemName": "sb_prominence11",
        "used_classes": [
            "Sorcerer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "shackle",
                "name": "Shackle",
                "chance": 0.716775
            }
        ],
        "name": "Spellbook: Prominence"
    },
    {
        "itemName": "sb_blazing_skin1",
        "used_classes": [
            "Sorcerer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "shackle",
                "name": "Shackle",
                "chance": 0.716775
            }
        ],
        "name": "Spellbook: Blazing Skin"
    },
    {
        "itemName": "sb_decay1",
        "used_classes": [
            "Sorcerer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "pan_ruem_elder",
                "name": "Satyr Elder",
                "chance": 1.5124067312
            }
        ],
        "name": "Spellbook: Decay"
    },
    {
        "itemName": "sb_cancel1",
        "used_classes": [
            "Sorcerer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "pan_ruem_elder",
                "name": "Satyr Elder",
                "chance": 1.5124067312
            }
        ],
        "name": "Spellbook: Cancel"
    },
    {
        "itemName": "sb_sleeping_cloud1",
        "used_classes": [
            "Sorcerer",
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "forest_runner",
                "name": "Forest Runner",
                "chance": 1.188325
            }
        ],
        "name": "Spellbook: Sleeping Cloud"
    },
    {
        "itemName": "sb_aura_flare11",
        "used_classes": [
            "Sorcerer",
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "shackle",
                "name": "Shackle",
                "chance": 0.716775
            }
        ],
        "name": "Spellbook: Aura Flare"
    },
    {
        "itemName": "sb_surrender_to_water1",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "fline",
                "name": "Fline",
                "chance": 1.3332
            }
        ],
        "name": "Spellbook: Surrender to Water"
    },
    {
        "itemName": "sb_frost_wall1",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "unicorn_elder",
                "name": "Unicorn Elder",
                "chance": 1.3380531668
            }
        ],
        "name": "Spellbook: Frost Wall"
    },
    {
        "itemName": "sb_freezing_shackle1",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "forest_runner",
                "name": "Forest Runner",
                "chance": 1.188325
            }
        ],
        "name": "Spellbook: Freezing Shackle"
    },
    {
        "itemName": "sb_hydro_blast11",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "fline",
                "name": "Fline",
                "chance": 1.3332
            }
        ],
        "name": "Spellbook: Hydro Blast"
    },
    {
        "itemName": "sb_frost_bolt11",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "fline",
                "name": "Fline",
                "chance": 1.3332
            }
        ],
        "name": "Spellbook: Frost Bolt"
    },
    {
        "itemName": "sb_ice_dagger1",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "forest_runner",
                "name": "Forest Runner",
                "chance": 1.188325
            }
        ],
        "name": "Spellbook: Ice Dagger"
    },
    {
        "itemName": "sb_freezing_skin1",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "fline",
                "name": "Fline",
                "chance": 1.3332
            }
        ],
        "name": "Spellbook: Freezing Skin"
    },
    {
        "itemName": "sb_tempest1",
        "used_classes": [
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "pan_ruem_elder",
                "name": "Satyr Elder",
                "chance": 1.5124067312
            }
        ],
        "name": "Spellbook: Tempest"
    },
    {
        "itemName": "sb_hurricane11",
        "used_classes": [
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "liele",
                "name": "Liele",
                "chance": 1.37965
            }
        ],
        "name": "Spellbook: Hurricane"
    },
    {
        "itemName": "sb_servitor_magic_shield1",
        "used_classes": [
            "Warlock",
            "Elemental Summoner",
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "fline_elder",
                "name": "Fline Elder",
                "chance": 1.23815
            }
        ],
        "name": "Spellbook: Servitor Magic Shield"
    },
    {
        "itemName": "sb_servitor_physical_shield1",
        "used_classes": [
            "Warlock",
            "Elemental Summoner",
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "liele",
                "name": "Liele",
                "chance": 1.37965
            }
        ],
        "name": "Spellbook: Servitor Physical Shield"
    },
    {
        "itemName": "sb_servitor_haste1",
        "used_classes": [
            "Warlock",
            "Elemental Summoner",
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "fline_elder",
                "name": "Fline Elder",
                "chance": 1.23815
            }
        ],
        "name": "Spellbook: Servitor Haste"
    },
    {
        "itemName": "sb_invigor1",
        "used_classes": [
            "Prophet"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "liele",
                "name": "Liele",
                "chance": 1.37965
            }
        ],
        "name": "Spellbook: Invigor"
    },
    {
        "itemName": "sb_magic_barrier1",
        "used_classes": [
            "Prophet"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "fline_elder",
                "name": "Fline Elder",
                "chance": 1.23815
            }
        ],
        "name": "Spellbook: Magic Barrier"
    },
    {
        "itemName": "sb_bless_the_body1",
        "used_classes": [
            "Prophet"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "fline_elder",
                "name": "Fline Elder",
                "chance": 1.23815
            }
        ],
        "name": "Spellbook: Bless the Body"
    },
    {
        "itemName": "sb_bless_the_soul1",
        "used_classes": [
            "Prophet"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "liele_elder",
                "name": "Liele Elder",
                "chance": 1.3137500642
            }
        ],
        "name": "Spellbook: Bless the Soul"
    },
    {
        "itemName": "sb_return1",
        "used_classes": [
            "Prophet",
            "Elven Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "liele",
                "name": "Liele",
                "chance": 1.37965
            }
        ],
        "name": "Spellbook: Return"
    },
    {
        "itemName": "sb_haste1",
        "used_classes": [
            "Prophet"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "liele_elder",
                "name": "Liele Elder",
                "chance": 1.3137500642
            }
        ],
        "name": "Spellbook: Haste"
    },
    {
        "itemName": "sb_guidance1",
        "used_classes": [
            "Prophet",
            "Shillien Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ti_mi_kran",
                "name": "Valley Treant",
                "chance": 1.2134348547
            }
        ],
        "name": "Spellbook: Guidance"
    },
    {
        "itemName": "sb_death_whisper1",
        "used_classes": [
            "Prophet",
            "Shillien Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ti_mi_kran",
                "name": "Valley Treant",
                "chance": 1.2134348547
            }
        ],
        "name": "Spellbook: Death Whisper"
    },
    {
        "itemName": "sb_bless_shield1",
        "used_classes": [
            "Prophet",
            "Elven Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ti_mi_kran",
                "name": "Valley Treant",
                "chance": 1.2134348547
            }
        ],
        "name": "Spellbook: Bless Shield"
    },
    {
        "itemName": "sb_wisdom_of_paagrio1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc",
                "name": "Timak Orc",
                "chance": 0.8186991813
            }
        ],
        "name": "Amulet: Wisdom of Paagrio"
    },
    {
        "itemName": "sb_glory_of_paagrio1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc",
                "name": "Timak Orc",
                "chance": 0.8186991813
            }
        ],
        "name": "Amulet: Glory of Paagrio"
    },
    {
        "itemName": "sb_seal_of_winter1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc",
                "name": "Timak Orc",
                "chance": 0.8187016373999999
            }
        ],
        "name": "Amulet: Seal of Winter"
    },
    {
        "itemName": "sb_seal_of_flame1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_shaman",
                "name": "Timak Orc Shaman",
                "chance": 0.6286452671999999
            }
        ],
        "name": "Amulet: Seal of Flame"
    },
    {
        "itemName": "sb_seal_of_gloom1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_soldier",
                "name": "Timak Orc Soldier",
                "chance": 0.8827596882000001
            }
        ],
        "name": "Amulet: Seal of Gloom"
    },
    {
        "itemName": "sb_seal_of_mirage1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_warrior",
                "name": "Timak Orc Warrior",
                "chance": 0.6349074402
            }
        ],
        "name": "Amulet: Seal of Mirage"
    },
    {
        "itemName": "sb_seal_of_silence1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_shaman",
                "name": "Timak Orc Shaman",
                "chance": 0.6286452671999999
            }
        ],
        "name": "Amulet: Seal of Silence"
    },
    {
        "itemName": "sb_seal_of_scourge1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_archer",
                "name": "Timak Orc Archer",
                "chance": 1.0769655897000001
            }
        ],
        "name": "Amulet: Seal of Scourge"
    },
    {
        "itemName": "sb_seal_of_suspension1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_overlord",
                "name": "Timak Orc Overlord",
                "chance": 1.2409
            }
        ],
        "name": "Amulet: Seal of Suspension"
    },
    {
        "itemName": "sb_sight_of_paagrio1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_warrior",
                "name": "Timak Orc Warrior",
                "chance": 0.6349074402
            }
        ],
        "name": "Amulet: Sight of Paagrio"
    },
    {
        "itemName": "sb_shield_of_paagrio1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_archer",
                "name": "Timak Orc Archer",
                "chance": 1.0769655897000001
            }
        ],
        "name": "Amulet: Shield of Paagrio"
    },
    {
        "itemName": "sb_steal_essence1",
        "used_classes": [
            "Warcryer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_archer",
                "name": "Timak Orc Archer",
                "chance": 1.0769688205999999
            }
        ],
        "name": "Amulet: Steal Essence"
    },
    {
        "itemName": "sb_freezing_flame1",
        "used_classes": [
            "Warcryer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_soldier",
                "name": "Timak Orc Soldier",
                "chance": 1.0620701558999999
            }
        ],
        "name": "Amulet: Freezing Flame"
    },
    {
        "itemName": "sb_chant_of_fury1",
        "used_classes": [
            "Warcryer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_overlord",
                "name": "Timak Orc Overlord",
                "chance": 1.2409
            }
        ],
        "name": "Amulet: Chant of Fury"
    },
    {
        "itemName": "sb_chant_of_evasion1",
        "used_classes": [
            "Warcryer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_soldier",
                "name": "Timak Orc Soldier",
                "chance": 1.0620701558999999
            }
        ],
        "name": "Amulet: Chant of Evasion"
    },
    {
        "itemName": "sb_chant_of_rage1",
        "used_classes": [
            "Warcryer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_warrior",
                "name": "Timak Orc Warrior",
                "chance": 0.6349074402
            }
        ],
        "name": "Amulet: Chant of Rage"
    },
    {
        "itemName": "sb_greater_heal11",
        "used_classes": [
            "Bishop",
            "Elven Elder",
            "Shillien Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "manashen",
                "name": "Manashen Gargoyle",
                "chance": 0.5845576348999999
            }
        ],
        "name": "Spellbook: Greater Heal"
    },
    {
        "itemName": "sb_greater_battle_heal11",
        "used_classes": [
            "Bishop"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_monstereye",
                "name": "Enchanted Monstereye",
                "chance": 0.51112
            }
        ],
        "name": "Spellbook: Greater Battle Heal"
    },
    {
        "itemName": "sb_greater_group_heal11",
        "used_classes": [
            "Bishop",
            "Shillien Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_stone_golem",
                "name": "Enchanted Stone Golem",
                "chance": 0.73775
            }
        ],
        "name": "Spellbook: Greater Group Heal"
    },
    {
        "itemName": "sb_remedy1",
        "used_classes": [
            "Paladin"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_iron_golem",
                "name": "Enchanted Iron Golem",
                "chance": 0.77365
            }
        ],
        "name": "Spellbook: Remedy"
    },
    {
        "itemName": "sb_summon_siege_golem",
        "used_classes": [],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "hatar_hanishee",
                "name": "Hatar Hanishee",
                "chance": 0.70214862
            }
        ],
        "name": "Blueprint: Summon Siege Golem"
    },
    {
        "itemName": "sb_mass_ressurection1",
        "used_classes": [
            "Bishop"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "hatar_hanishee",
                "name": "Hatar Hanishee",
                "chance": 0.73267569
            }
        ],
        "name": "Spellbook: Mass Resurrection"
    },
    {
        "itemName": "sb_party_recall1",
        "used_classes": [
            "Elven Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "hatar_hanishee",
                "name": "Hatar Hanishee",
                "chance": 0.73267569
            }
        ],
        "name": "Spellbook: Party Return"
    },
    {
        "itemName": "sb_heart_of_paagrio1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [],
        "name": "Amulet: Heart of Paagrio"
    },
    {
        "itemName": "sb_decrease_weight1",
        "used_classes": [
            "Elven Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Decrease Weight"
    },
    {
        "itemName": "sb_restore_life1",
        "used_classes": [
            "Bishop"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "manashen",
                "name": "Manashen Gargoyle",
                "chance": 0.4858694604
            }
        ],
        "name": "Spellbook: Restore Life"
    },
    {
        "itemName": "sb_resist_shock1",
        "used_classes": [
            "Elven Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "enchanted_monstereye",
                "name": "Enchanted Monstereye",
                "chance": 0.51112
            }
        ],
        "name": "Spellbook: Resist Shock"
    },
    {
        "itemName": "sb_life_leech",
        "used_classes": [
            "Shillien Knight"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "giant_fungus",
                "name": "Giant Fungus",
                "chance": 0.8186991813
            }
        ],
        "name": "Spellbook: Life Leech"
    },
    {
        "itemName": "sb_tact_of_paagrio",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "giant_fungus",
                "name": "Giant Fungus",
                "chance": 0.8186991813
            }
        ],
        "name": "Amulet: Tact of Paagrio"
    },
    {
        "itemName": "sb_rage_of_paagrio",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "lakin",
                "name": "Lakin",
                "chance": 0.884947947
            }
        ],
        "name": "Amulet: Rage of Paagrio"
    },
    {
        "itemName": "sb_transfer_pain",
        "used_classes": [
            "Necromancer",
            "Warlock",
            "Elemental Summoner",
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "giant_fungus",
                "name": "Giant Fungus",
                "chance": 0.8187016373999999
            }
        ],
        "name": "Spellbook: Transfer Pain"
    },
    {
        "itemName": "sb_mana_regeneration",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "lakin",
                "name": "Lakin",
                "chance": 1.064704106
            }
        ],
        "name": "Spellbook: Mana Regeneration"
    },
    {
        "itemName": "sb_curse_gloom",
        "used_classes": [
            "Necromancer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "lakin",
                "name": "Lakin",
                "chance": 0.884947947
            }
        ],
        "name": "Spellbook: Curse Gloom"
    },
    {
        "itemName": "sb_solar_spark1",
        "used_classes": [
            "Elven Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Solar Spark"
    },
    {
        "itemName": "sb_solar_flare1",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "nightmare_guide",
                "name": "Nightmare Guide",
                "chance": 0.280037052
            }
        ],
        "name": "Spellbook: Solar Flare"
    },
    {
        "itemName": "sb_shadow_spark1",
        "used_classes": [
            "Dark Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Shadow Spark"
    },
    {
        "itemName": "sb_shadow_flare1",
        "used_classes": [
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "nightmare_guide",
                "name": "Nightmare Guide",
                "chance": 0.280037052
            }
        ],
        "name": "Spellbook: Shadow Flare"
    },
    {
        "itemName": "sb_vampiric_rage1",
        "used_classes": [
            "Shillien Oracle"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Vampiric Rage"
    },
    {
        "itemName": "sb_curse_disease1",
        "used_classes": [
            "Necromancer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "dismal_pole",
                "name": "Dismal Pole",
                "chance": 0.50665965
            }
        ],
        "name": "Spellbook: Curse Disease"
    },
    {
        "itemName": "sb_benediction",
        "used_classes": [
            "Bishop"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "spite_soul_leader",
                "name": "Spiteful Soul Leader",
                "chance": 0.40856198759999995
            }
        ],
        "name": "Spellbook: Benediction"
    },
    {
        "itemName": "sb_word_of_fear1",
        "used_classes": [
            "Prophet"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "water_giant",
                "name": "Water Giant",
                "chance": 1.3954652712
            }
        ],
        "name": "Spellbook: Word of Fear"
    },
    {
        "itemName": "sb_serenade_of_eva1",
        "used_classes": [
            "Elven Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "water_giant",
                "name": "Water Giant",
                "chance": 1.3954652712
            }
        ],
        "name": "Spellbook: Serenade of Eva"
    },
    {
        "itemName": "sb_summon_wild_hog_cannon",
        "used_classes": [
            "Warsmith"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "fallen_orc_shaman",
                "name": "Fallen Orc Shaman",
                "chance": 0.500271045
            }
        ],
        "name": "Blueprint: Summon Wild Hog Cannon"
    },
    {
        "itemName": "sb_energy_bolt1",
        "used_classes": [
            "Human Wizard",
            "Elven Wizard"
        ],
        "available_at_shop": true,
        "drop_info": [],
        "name": "Spellbook: Energy Bolt"
    },
    {
        "itemName": "sb_aura_bolt1",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "nightmare_guide",
                "name": "Nightmare Guide",
                "chance": 0.280037052
            }
        ],
        "name": "Spellbook: Aura Bolt"
    },
    {
        "itemName": "sb_summon_kai_the_cat1",
        "used_classes": [
            "Warlock"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "liangma",
                "name": "Liangma",
                "chance": 1.7650649016000002
            }
        ],
        "name": "Spellbook: Summon Kai the Cat"
    },
    {
        "itemName": "sb_summon_unicorn_merrow1",
        "used_classes": [
            "Elemental Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "liangma",
                "name": "Liangma",
                "chance": 1.7650649016000002
            }
        ],
        "name": "Spellbook: Summon Unicorn Merrow"
    },
    {
        "itemName": "sb_summon_soulless1",
        "used_classes": [
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "liangma",
                "name": "Liangma",
                "chance": 1.7650701967999998
            }
        ],
        "name": "Spellbook: Summon Soulless"
    },
    {
        "itemName": "sb_summon_bigboom1",
        "used_classes": [
            "Warsmith"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "fallen_orc_shaman",
                "name": "Fallen Orc Shaman",
                "chance": 0.500271045
            }
        ],
        "name": "Blueprint: Summon Big Boom"
    },
    {
        "itemName": "sb_summon_binding_cubic1",
        "used_classes": [
            "Warlock"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "hatu_windsus",
                "name": "Hatu Windsus",
                "chance": 0.5419661246999999
            }
        ],
        "name": "Spellbook: Summon Binding Cubic"
    },
    {
        "itemName": "sb_summon_aqua_cubic1",
        "used_classes": [
            "Elemental Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "hatu_windsus",
                "name": "Hatu Windsus",
                "chance": 0.5419661246999999
            }
        ],
        "name": "Spellbook: Summon Aqua Cubic"
    },
    {
        "itemName": "sb_summon_spark_cubic1",
        "used_classes": [
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "hatu_windsus",
                "name": "Hatu Windsus",
                "chance": 0.5419677505999999
            }
        ],
        "name": "Spellbook: Summon Spark Cubic"
    },
    {
        "itemName": "sb_speed_of_paagrio1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "dismal_pole",
                "name": "Dismal Pole",
                "chance": 0.50665965
            }
        ],
        "name": "Amulet: Speed of Paagrio"
    },
    {
        "itemName": "sb_soul_guard1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "water_giant",
                "name": "Water Giant",
                "chance": 1.3954694576
            }
        ],
        "name": "Amulet: Soul Guard"
    },
    {
        "itemName": "sb_chant_of_revenge1",
        "used_classes": [
            "Warcryer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "credion",
                "name": "Crendion",
                "chance": 3.2922
            }
        ],
        "name": "Amulet: Chant of Revenge"
    },
    {
        "itemName": "sb_seed_of_fire",
        "used_classes": [
            "Sorcerer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "allen_orc_captian",
                "name": "Fallen Orc Captain",
                "chance": 0.5881327452
            }
        ],
        "name": "Spellbook: Seed of Fire"
    },
    {
        "itemName": "sb_seed_of_water",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "allen_orc_captian",
                "name": "Fallen Orc Captain",
                "chance": 0.5881327452
            }
        ],
        "name": "Spellbook: Seed of Water"
    },
    {
        "itemName": "sb_seed_of_wind",
        "used_classes": [
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "allen_orc_captian",
                "name": "Fallen Orc Captain",
                "chance": 0.5881345096
            }
        ],
        "name": "Spellbook: Seed of Wind"
    },
    {
        "itemName": "sb_aura_symphony1",
        "used_classes": [
            "Sorcerer",
            "Spellsinger",
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "innersen",
                "name": "Innersen",
                "chance": 0.31965
            }
        ],
        "name": "Spellbook: Aura Symphony"
    },
    {
        "itemName": "sb_inferno1",
        "used_classes": [
            "Sorcerer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "innersen",
                "name": "Innersen",
                "chance": 0.31965
            }
        ],
        "name": "Spellbook: Inferno"
    },
    {
        "itemName": "sb_blizzard1",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "innersen",
                "name": "Innersen",
                "chance": 0.31965
            }
        ],
        "name": "Spellbook: Blizzard"
    },
    {
        "itemName": "sb_demon_wind1",
        "used_classes": [
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "innersen",
                "name": "Innersen",
                "chance": 0.31965
            }
        ],
        "name": "Spellbook: Demon Wind"
    },
    {
        "itemName": "sb_elemental_symphony",
        "used_classes": [],
        "available_at_shop": false,
        "drop_info": [],
        "name": "Spellbook: Elemental Symphony "
    },
    {
        "itemName": "sb_elemental_symphony_h1",
        "used_classes": [
            "Sorcerer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "gamlin",
                "name": "Gamlin",
                "chance": 0.7459659207
            }
        ],
        "name": "Spellbook: Elemental Assault"
    },
    {
        "itemName": "sb_elemental_symphony_e1",
        "used_classes": [],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "gamlin",
                "name": "Gamlin",
                "chance": 0.7459659207
            }
        ],
        "name": "Spellbook: Elemental Symphony "
    },
    {
        "itemName": "sb_elemental_symphony_d1",
        "used_classes": [
            "Spellhowler"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "gamlin",
                "name": "Gamlin",
                "chance": 0.7459681585999999
            }
        ],
        "name": "Spellbook: Elemental Storm"
    },
    {
        "itemName": "sb_aqua_splash1",
        "used_classes": [
            "Spellsinger"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "hell_keeper_medusa",
                "name": "Hell Keeper Medusa",
                "chance": 0.8709631483000001
            }
        ],
        "name": "Spellbook: Aqua Splash"
    },
    {
        "itemName": "sb_rain_of_fire1",
        "used_classes": [
            "Sorcerer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "hell_keeper_medusa",
                "name": "Hell Keeper Medusa",
                "chance": 0.8709631483000001
            }
        ],
        "name": "Spellbook: Rain of Fire"
    },
    {
        "itemName": "sb_mass_slow1",
        "used_classes": [
            "Necromancer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "crypt_sage",
                "name": "Crypt Sage",
                "chance": 1.4265985734
            }
        ],
        "name": "Spellbook: Mass Slow"
    },
    {
        "itemName": "sb_servitor_empower1",
        "used_classes": [
            "Warlock",
            "Elemental Summoner",
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "vault_priest",
                "name": "Vault Priest",
                "chance": 2.5649486769
            }
        ],
        "name": "Spellbook: Servitor Empower"
    },
    {
        "itemName": "sb_servitor_cure1",
        "used_classes": [
            "Warlock",
            "Elemental Summoner",
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "vault_priest",
                "name": "Vault Priest",
                "chance": 4.3283513231
            }
        ],
        "name": "Spellbook: Servitor Cure"
    },
    {
        "itemName": "sb_servitor_blessing",
        "used_classes": [
            "Warlock",
            "Elemental Summoner",
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "crypt_sage",
                "name": "Crypt Sage",
                "chance": 1.4265985734
            }
        ],
        "name": "Spellbook: Servitor Blessing"
    },
    {
        "itemName": "sb_wild_magic1",
        "used_classes": [
            "Elven Elder",
            "Shillien Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "crypt_sage",
                "name": "Crypt Sage",
                "chance": 1.4266028532
            }
        ],
        "name": "Spellbook: Wild Magic"
    },
    {
        "itemName": "sb_advanced_block1",
        "used_classes": [
            "Elven Elder"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "hell_keeper_medusa",
                "name": "Hell Keeper Medusa",
                "chance": 0.8709631483000001
            }
        ],
        "name": "Spellbook: Advanced Block"
    },
    {
        "itemName": "sb_honor_of_paagrio1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "mausoleum_sage",
                "name": "Sepulcher Sage",
                "chance": 1.89395
            }
        ],
        "name": "Amulet: Honor Of Paagrio "
    },
    {
        "itemName": "sb_ritual_of_life1",
        "used_classes": [
            "Overlord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "hell_keeper_medusa",
                "name": "Hell Keeper Medusa",
                "chance": 0.716954664
            }
        ],
        "name": "Amulet: Ritual Of Paagrio "
    },
    {
        "itemName": "sb_prayer1",
        "used_classes": [
            "Bishop"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "mausoleum_sage",
                "name": "Sepulcher Sage",
                "chance": 1.89395
            }
        ],
        "name": "Spellbook: Prayer"
    },
    {
        "itemName": "sb_chant_of_predator1-3",
        "used_classes": [
            "Warcryer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ti_mi_kran",
                "name": "Valley Treant",
                "chance": 0.8441355720999999
            }
        ],
        "name": "Amulet: Chant of Predator"
    },
    {
        "itemName": "sb_chant_of_eagle1-3",
        "used_classes": [
            "Warcryer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "pan_ruem",
                "name": "Satyr",
                "chance": 1.1605187728
            }
        ],
        "name": "Amulet: Chant of Eagle"
    },
    {
        "itemName": "sb_chant_of_vampire1-4",
        "used_classes": [
            "Warcryer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "timak_orc_shaman",
                "name": "Timak Orc Shaman",
                "chance": 0.7511094656
            }
        ],
        "name": "Amulet: Chant of Vampire"
    },
    {
        "itemName": "sb_body_of_avatar1-6",
        "used_classes": [
            "Bishop"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "unicorn",
                "name": "Unicorn",
                "chance": 1.0385786846
            }
        ],
        "name": "Spellbook: Body of Avatar"
    },
    {
        "itemName": "sb_mass_summon_storm_cubic",
        "used_classes": [
            "Warlock"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "gigant_fanatic",
                "name": "Gigant Raider",
                "chance": 2.6068307264999997
            }
        ],
        "name": "Spellbook - Mass Summon Storm Cubic"
    },
    {
        "itemName": "sb_mass_summon_aqua_cubic",
        "used_classes": [],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "gigant_fanatic",
                "name": "Gigant Raider",
                "chance": 2.6068307264999997
            }
        ],
        "name": "Spellbook - Mass Summon Aqua Cubic"
    },
    {
        "itemName": "sb_mass_summon_poltergeist_cubic",
        "used_classes": [
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "gigant_fanatic",
                "name": "Gigant Raider",
                "chance": 2.6068385469999997
            }
        ],
        "name": "Spellbook - Mass Summon Poltergeist Cubic"
    },
    {
        "itemName": "sb_summon_queen_of_cat",
        "used_classes": [
            "Warlock"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "farhite",
                "name": "Farhite",
                "chance": 2.17765
            }
        ],
        "name": "Spellbook - Summon Queen of Cat"
    },
    {
        "itemName": "sb_summon_unicorn_seraphim",
        "used_classes": [
            "Elemental Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "farhite",
                "name": "Farhite",
                "chance": 2.17765
            }
        ],
        "name": "Spellbook - Summon Unicorn Seraphim"
    },
    {
        "itemName": "sb_summon_nightshade",
        "used_classes": [
            "Phantom Summoner"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "grave_keeper_dark_horror",
                "name": "Grave Keeper Dark Horror",
                "chance": 3.6639
            }
        ],
        "name": "Spellbook - Summon Nightshade"
    },
    {
        "itemName": "sb_summon_cursed_man",
        "used_classes": [
            "Necromancer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "grave_keeper_dark_horror",
                "name": "Grave Keeper Dark Horror",
                "chance": 3.6639
            }
        ],
        "name": "Spellbook - Summon Cursed Man"
    },
    {
        "itemName": "sb_balance_life",
        "used_classes": [
            "Cardinal"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "lilim_slayer",
                "name": "Lilim Slayer",
                "chance": 1.7919315413999999
            }
        ],
        "name": "Spellbook - Balance Life"
    },
    {
        "itemName": "sb_curse_of_doom",
        "used_classes": [
            "Soultaker"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "tomb_highguard",
                "name": "Tomb Guard",
                "chance": 1.5127651538999998
            }
        ],
        "name": "Spellbook - Curse of Doom"
    },
    {
        "itemName": "sb_curse_of_abyss",
        "used_classes": [
            "Soultaker"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "tomb_highguard",
                "name": "Tomb Guard",
                "chance": 1.5127696921999998
            }
        ],
        "name": "Spellbook - Curse of Abyss"
    },
    {
        "itemName": "sb_arcane_chaos",
        "used_classes": [
            "Archmage",
            "Mystic Muse",
            "Storm Screamer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "tomb_highguard",
                "name": "Tomb Guard",
                "chance": 1.5127651538999998
            }
        ],
        "name": "Spellbook - Arcane Chaos"
    },
    {
        "itemName": "sb_fire_vortex",
        "used_classes": [
            "Archmage"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "thermal_nepenthes",
                "name": "Hot Springs Nepenthes",
                "chance": 0.6118938078
            }
        ],
        "name": "Spellbook - Fire Vortex"
    },
    {
        "itemName": "sb_ice_vortex",
        "used_classes": [
            "Mystic Muse"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "thermal_nepenthes",
                "name": "Hot Springs Nepenthes",
                "chance": 0.6118938078
            }
        ],
        "name": "Spellbook - Ice Vortex"
    },
    {
        "itemName": "sb_wind_vortex",
        "used_classes": [
            "Storm Screamer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "thermal_nepenthes",
                "name": "Hot Springs Nepenthes",
                "chance": 0.6118938078
            }
        ],
        "name": "Spellbook - Wind Vortex"
    },
    {
        "itemName": "sb_light_vortex",
        "used_classes": [
            "Mystic Muse"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "thermal_nepenthes",
                "name": "Hot Springs Nepenthes",
                "chance": 0.6118938078
            }
        ],
        "name": "Spellbook - Light Vortex"
    },
    {
        "itemName": "sb_dark_vortex",
        "used_classes": [
            "Soultaker"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "thermal_nepenthes",
                "name": "Hot Springs Nepenthes",
                "chance": 0.6118938078
            }
        ],
        "name": "Spellbook - Dark Vortex"
    },
    {
        "itemName": "sb_mass_warrior_bane",
        "used_classes": [
            "Soultaker"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ancient_saint_wing",
                "name": "Lesser Ancient Shaman",
                "chance": 1.10775
            }
        ],
        "name": "Spellbook - Mass Warrior Bane"
    },
    {
        "itemName": "sb_mass_mage_bane",
        "used_classes": [
            "Soultaker"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ancient_saint_wing",
                "name": "Lesser Ancient Shaman",
                "chance": 1.10775
            }
        ],
        "name": "Spellbook - Mass Mage Bane"
    },
    {
        "itemName": "sb_warrior_servitor",
        "used_classes": [
            "Arcana Lord"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "forgetten_ancients",
                "name": "Forgotten Ancient People",
                "chance": 0.375775
            }
        ],
        "name": "Spellbook - Warrior Servitor"
    },
    {
        "itemName": "sb_wizard_servitor",
        "used_classes": [
            "Elemental Master"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "forgetten_ancients",
                "name": "Forgotten Ancient People",
                "chance": 0.375775
            }
        ],
        "name": "Spellbook - Wizard Servitor"
    },
    {
        "itemName": "sb_assasin_servitor",
        "used_classes": [
            "Spectral Master"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "forgetten_ancients",
                "name": "Forgotten Ancient People",
                "chance": 0.375775
            }
        ],
        "name": "Spellbook - Assassin Servitor"
    },
    {
        "itemName": "sb_final_servitor",
        "used_classes": [
            "Arcana Lord",
            "Elemental Master",
            "Spectral Master"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "forgetten_ancients",
                "name": "Forgotten Ancient People",
                "chance": 0.375775
            }
        ],
        "name": "Spellbook - Final Servitor"
    },
    {
        "itemName": "sb_warrior_bane",
        "used_classes": [
            "Arcana Lord",
            "Elemental Master"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ancient_saint_wing",
                "name": "Lesser Ancient Shaman",
                "chance": 1.10775
            }
        ],
        "name": "Spellbook - Warrior Bane"
    },
    {
        "itemName": "sb_mage_bane",
        "used_classes": [
            "Arcana Lord",
            "Spectral Master"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ancient_saint_wing",
                "name": "Lesser Ancient Shaman",
                "chance": 1.10775
            }
        ],
        "name": "Spellbook - Mage Bane"
    },
    {
        "itemName": "sb_elemental_protection",
        "used_classes": [
            "Hierophant"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "tomb_oracle",
                "name": "Tomb Preacher",
                "chance": 1.6098983901
            }
        ],
        "name": "Spellbook - Elemental Protection"
    },
    {
        "itemName": "sb_divine_protection",
        "used_classes": [
            "Cardinal",
            "Eva's Saint"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "tomb_oracle",
                "name": "Tomb Preacher",
                "chance": 1.6098983901
            }
        ],
        "name": "Spellbook - Divine Protection"
    },
    {
        "itemName": "sb_arcane_protection",
        "used_classes": [
            "Eva's Saint",
            "Shillien Saint"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "tomb_oracle",
                "name": "Tomb Preacher",
                "chance": 1.6099032197999998
            }
        ],
        "name": "Spellbook - Arcane Protection"
    },
    {
        "itemName": "sb_prophecy_of_water",
        "used_classes": [
            "Eva's Saint"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "lilim_archmage",
                "name": "Lilim Great Mystic",
                "chance": 1.6027650639000002
            }
        ],
        "name": "Spellbook - Prophecy of Water"
    },
    {
        "itemName": "sb_prophecy_of_fire",
        "used_classes": [
            "Hierophant"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "lilim_archmage",
                "name": "Lilim Great Mystic",
                "chance": 1.6027650639000002
            }
        ],
        "name": "Spellbook - Prophecy of Fire"
    },
    {
        "itemName": "sb_prophecy_of_wind",
        "used_classes": [
            "Shillien Saint"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "lilim_archmage",
                "name": "Lilim Great Mystic",
                "chance": 1.6027698722
            }
        ],
        "name": "Spellbook - Prophecy of Wind"
    },
    {
        "itemName": "sb_block_shield",
        "used_classes": [
            "Hierophant",
            "Shillien Saint"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ketra_orc_shaman",
                "name": "Ketra Orc Shaman",
                "chance": 0.886725
            }
        ],
        "name": "Spellbook - Block Shield"
    },
    {
        "itemName": "sb_block_wind_walk",
        "used_classes": [
            "Hierophant",
            "Eva's Saint"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ketra_orc_shaman",
                "name": "Ketra Orc Shaman",
                "chance": 0.886725
            }
        ],
        "name": "Spellbook - Block Wind Walk"
    },
    {
        "itemName": "sb_mass_block_shield",
        "used_classes": [
            "Cardinal"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ketra_orc_shaman",
                "name": "Ketra Orc Shaman",
                "chance": 0.886725
            }
        ],
        "name": "Spellbook - Mass Block Shield"
    },
    {
        "itemName": "sb_mass_block_wind_walk",
        "used_classes": [
            "Cardinal"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "ketra_orc_shaman",
                "name": "Ketra Orc Shaman",
                "chance": 0.886725
            }
        ],
        "name": "Spellbook - Mass Block Wind Walk"
    },
    {
        "itemName": "sb_chant_of_spirit",
        "used_classes": [
            "Doomcryer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "lilim_slayer",
                "name": "Lilim Slayer",
                "chance": 1.7919315413999999
            }
        ],
        "name": "Amulet - Chant of Spirit"
    },
    {
        "itemName": "sb_chant_of_victory",
        "used_classes": [
            "Doomcryer"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "lilim_slayer",
                "name": "Lilim Slayer",
                "chance": 1.7919369171999997
            }
        ],
        "name": "Amulet - Chant of Victory"
    },
    {
        "itemName": "sb_eye_of_paagrio",
        "used_classes": [
            "Dominator"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "nephilim_cardinal",
                "name": "Nephilim Cardinal",
                "chance": 1.3088
            }
        ],
        "name": "Amulet - Eye of Paagrio"
    },
    {
        "itemName": "sb_soul_of_paagrio",
        "used_classes": [
            "Dominator"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "nephilim_cardinal",
                "name": "Nephilim Cardinal",
                "chance": 1.3088
            }
        ],
        "name": "Amulet - Soul of Paagrio"
    },
    {
        "itemName": "sb_seal_of_despair",
        "used_classes": [
            "Dominator"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "nephilim_cardinal",
                "name": "Nephilim Cardinal",
                "chance": 1.3088
            }
        ],
        "name": "Amulet - Seal of Despair"
    },
    {
        "itemName": "sb_seal_of_disease",
        "used_classes": [
            "Dominator"
        ],
        "available_at_shop": false,
        "drop_info": [
            {
                "npcName": "nephilim_cardinal",
                "name": "Nephilim Cardinal",
                "chance": 1.3088
            }
        ],
        "name": "Amulet: Seal of Disease"
    }
]