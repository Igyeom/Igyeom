function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generate() {
    document.getElementById('progress').hidden = false;
    document.getElementById('eta').hidden = false;

    await sleep(1000);
    document.getElementById('progress').value = "8";
    document.getElementById('eta').innerHTML = "Downloading Nitro JSON... Estimated Time Left: 85s"

    await sleep(1000);
    document.getElementById('progress').value = "19";
    document.getElementById('eta').innerHTML = "Downloading Nitro JSON... Estimated Time Left: 69s"

    await sleep(300);
    document.getElementById('progress').value = "19";
    document.getElementById('eta').innerHTML = "Downloading Nitro JSON... Estimated Time Left: 54s"

    await sleep(1500);
    document.getElementById('progress').value = "37";
    document.getElementById('eta').innerHTML = "Reading Username <=> Gift Code Table... Estimated Time Left: 18s"
    
    await sleep(900);
    document.getElementById('progress').value = "40";
    document.getElementById('eta').innerHTML = "Reading Username <=> Gift Code Table... Estimated Time Left: 17s"

    await sleep(400);
    document.getElementById('progress').value = "42";
    document.getElementById('eta').innerHTML = "Reading Username <=> Gift Code Table... Estimated Time Left: 18s"

    await sleep(1000);
    document.getElementById('progress').value = "50";
    document.getElementById('eta').innerHTML = "Writing to Nitro Code JSON... Estimated Time Left: 15s"

    await sleep(5000);
    document.getElementById('progress').value = "95";
    document.getElementById('eta').innerHTML = "Writing to Nitro Code JSON... Estimated Time Left: 2s"

    await sleep(1000);
    document.getElementById('progress').value = "100";
    document.getElementById('eta').innerHTML = "Done! Click below to obtain your free Discord Nitro Gift Code!"

    document.getElementById('claim').hidden = false;
}