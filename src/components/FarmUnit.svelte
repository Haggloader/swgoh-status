<script>	
	import { characters, ships } from '../stores/game-data'
	import { units } from '../stores/player-data'

	export let farmUnit

	const playerUnit = $units[farmUnit.name]
	const gameUnit = $characters[farmUnit.name] ?? $ships[farmUnit.name]
	const side = gameUnit ? {'Light Side': 'light', 'Dark Side': 'dark', 'Neutral': 'neutral'}[gameUnit.alignment] : null

	console.log("Player Unit:", playerUnit);
	console.log("Game Unit:", gameUnit);

	const hasStars = playerUnit && (playerUnit.rarity >= farmUnit.stars)
	const almostHasGear = farmUnit.gear_level && (playerUnit && (farmUnit.gear_level - playerUnit.gear_level === 1))
	const hasGear = !farmUnit.gear_level || (playerUnit && (playerUnit.gear_level >= farmUnit.gear_level))
	const hasRelic = !farmUnit.gear_level || !farmUnit.relic_level || (playerUnit && (playerUnit.gear_level >= 13 && ((playerUnit.relic_tier - 2) >= farmUnit.relic_level)))

	// Function to check and handle stat comparisons
function checkStat(statName, farmValue) {
  if (farmUnit[statName] !== undefined) {
    const playerStatValue = playerUnit?.stats?.[statName];
    if (playerStatValue !== undefined) {
      return playerStatValue >= farmValue;
    } else {
      console.error(`Error: Unable to determine ${statName} value.`);
      return false;
    }
  } else {
    console.error(`Error: Missing target ${statName} value in farmUnit data.`);
    return false;
  }
}

	let hasSpeed = checkStat('speed', farmUnit.speed);
	let hasHealth = checkStat('health', farmUnit.health);
	let hasProtection = checkStat('protection', farmUnit.protection);
	let hasPhysical = checkStat('physical', farmUnit.physical);

	console.log("Has Stars:", hasStars);
	console.log("Almost Has Gear:", almostHasGear);
	console.log("Has Gear:", hasGear);
	console.log("Has Relic:", hasRelic);
	console.log("Player Unit Speed:", playerUnit && playerUnit.stats && playerUnit.stats[5]);
	console.log("Player Unit Health:", playerUnit && playerUnit.stats && playerUnit.stats[1]);
	console.log("Player Unit Protection:", playerUnit && playerUnit.stats && playerUnit.stats[28]);
	console.log("Player Unit Physical:", playerUnit && playerUnit.stats && playerUnit.stats[6]);

	const hasCount = (hasStars || 0) + (hasGear || 0) + (hasRelic || 0) + (hasSpeed || 0) + (hasHealth || 0) + (hasProtection || 0) + (hasPhysical || 0);

	console.log("Has Count:", hasCount);
</script>

<style type="text/scss">
tr:nth-child(even) {
  background: #282b2f; /* Fixed colon */
}

tr:nth-child(odd) {
  background: #383b3f; /* Fixed colon */
}

td {
  border-top: 1px solid #181b1f;
  border-bottom: 1px solid #181b1f;
  line-height: 1;
  padding: 0 0.25em;
  white-space: nowrap; /* Can be removed for text wrapping */
  display: flex; /* Added for flexbox */
  align-items: center; /* Added for vertical centering */
}

td.image {
  padding: 0 1px 0 0;
  width: 33px;

  img {
    box-sizing: border-box;
    margin-bottom: -1px;
  }
}

td.light img {
  border: 1px solid #00aaff;
}

td.dark img {
  border: 1px solid #ff4444;
}

a {
  color: #EEE;
}

.missing-character {
  background: rgba(255, 0, 0, 0.7) !important;
}

/* Number columns with flexbox for progress bars */
.numbers,
.numbers2 {
  display: flex;
  justify-content: space-between; /* Distribute remaining space evenly */
  width: 100%; /* Adjust width as needed */
}

.numbers span,
.numbers2 span {
  width: calc(50% - 0.5rem); /* Adjust width based on number of separators */
  text-align: center;
}

td.numbers > div,
td.numbers2 > div {
  display: none; /* Hide original progress bars (optional) */
}

/* New progress bar styles (optional) */
.progress {
  display: flex;
  width: 100%;
  height: 5px; /* Adjust height as needed */
}

.progress > div {
  flex: 1; /* Distribute remaining space proportionally */
  height: 100%;
}

.missing {
  background: rgba(255, 0, 0, 0.5);
}

.success {
  background: rgba(31, 255, 112, 0.5);
}

.spacer {
  background: #282b2f;
  line-height: 0.5rem;
}
</style>

<tr class="{!playerUnit ? 'missing-character' : ''}">
    {#if gameUnit}
      {#if farmUnit.stars === 0}
        <td colspan="15" class="spacer">&nbsp;</td>
      {:else}
        <td class="image {side}">
          <a href="{gameUnit.url}">
            <img src="{gameUnit.image}" width="32" height="32" alt="{farmUnit.name}">
          </a>
        </td>
        <td class="name { farmUnit.gear_level ? `success-${hasCount}` : (hasStars ? 'success' : 'success-2') }">
          <a href="{gameUnit.url}">{farmUnit.name}</a>
        </td>
        <td class="numbers {hasStars ? 'success' : 'missing'}">
          <span>{playerUnit.rarity}</span>
          <span>/</span>
          <span>{farmUnit.stars}</span>
        </td>
        <td class="numbers numbers2 {hasGear ? 'success' : (almostHasGear ? 'success-2' : 'missing')}">
          <span>{playerUnit.gear_level}</span>
          <span>/</span>
          <span>{farmUnit.gear_level}</span>
          {#if !hasGear}
            <div>
              {#each Array(6) as _, i}
                <div class="{playerUnit.gear[i].is_obtained ? 'success' : 'missing'}"></div>
              {/each}
            </div>
          {/if}
        </td>
        <td class="numbers {getStatClass('speed', farmUnit.speed, playerUnit)}">
          {getStatValue('speed', farmUnit, playerUnit)}
        </td>
        <td class="numbers {getStatClass('health', farmUnit.health, playerUnit)}">
          {getStatValue('health', farmUnit, playerUnit)}
        </td>
        <td class="numbers {getStatClass('protection', farmUnit.protection, playerUnit)}">
          {getStatValue('protection', farmUnit, playerUnit)}
        </td>
        <td class="numbers {getStatClass('physical', farmUnit.physical, playerUnit)}">
          {getStatValue('physical', farmUnit, playerUnit)}
        </td>
        {#if farmUnit.relic_level}
          <td class="numbers {hasRelic ? 'success' : 'missing'}">
            <span>{playerUnit.gear_level >= 13 ? playerUnit.relic_tier - 2 : 0}</span>
            <span>/</span>
            <span>{farmUnit.relic_level}</span>
          </td>
        {:else}
          <td class="success"></td>
        {/if}
      {/if}
    {:else}
      <td colspan="15">ERROR: invalid character "{farmUnit.name}"</td>
    {/if}
  </tr>
