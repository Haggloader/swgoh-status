<script>
    import { units } from '../stores/player-data';
    import { spacer } from '../things/farm-unit';
    import FarmUnit from './FarmUnit.svelte';

    export let farm;

    const hasUnit = $units[farm.name] !== undefined;
</script>

<style type="text/scss">
	table {
		border: 1px solid #181b1f;
		border-collapse: collapse;
		width: 27em;
	}

	colgroup {
		border: 1px solid #181b1f;
	}

	thead td {
		position: relative;
		font-size: 1.2rem;
		text-align: center;

		> span {
			position: absolute;
			right: 0.3rem;
			color: #ffaaaa;
			text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);

			&.has {
				color: #aaffaa;
			}
		}
	}

	th {
		border: 1px solid #181b1f;
		padding: 0.25em;
	}

	.dark {
		background: rgba(255, 65, 54, 0.5);
	}

	.light {
		background: rgba(0, 116, 217, 0.5);
	}

/* Improved table layout with flexbox */
	tbody {
		display: flex; /* Make tbody a flex container */
		flex-direction: column; /* Stack rows vertically */
	}

	.farm-unit-row {
		display: flex; /* Make each farm unit row a flexbox */
		align-items: center; /* Align cell content vertically */
		border-bottom: 1px solid #181b1f; /* Add border between rows */
		padding: 0.25em 0; /* Add some padding */
	}

/* Individual cell styles can be adjusted within .farm-unit-row */
</style>

<table>
    <colgroup span="2"></colgroup>
    <colgroup span="1" class="stars"></colgroup>
    <colgroup span="1" class="gear"></colgroup>
    <colgroup span="1" class="relic"></colgroup>
    <colgroup span="1" class="speed"></colgroup>
    <colgroup span="1" class="health"></colgroup>
    <colgroup span="1" class="protection"></colgroup>
    <colgroup span="1" class="physical"></colgroup>
    <thead>
      <tr>
        <td colspan="11" class="{farm.side}">{farm.name}<span class:has={hasUnit}>{hasUnit ? '✔' : '✖'}</span></td>
      </tr>
      <tr>
        <th colspan="2">Name</th>
        <th>Stars</th>
        <th>Gear</th>
        <th>Relic</th>
        <th>Speed</th>
        <th>Health</th>
        <th>Prot</th>
        <th>Phys</th>
      </tr>
    </thead>
    <tbody>
      {#each farm.units as unit}
        <FarmUnit farmUnit={unit} />
      {/each}
      {#if farm.ships.length > 0}
        <FarmUnit farmUnit={spacer} />
        {#each farm.ships as ship}
          <FarmUnit farmUnit={ship} />
        {/each}
      {/if}
    </tbody>
  </table>
