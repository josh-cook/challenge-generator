import xml.etree.ElementTree as ET
import json

root = ET.parse('./items.xml').getroot()

items = []

for child in root:
    item = { 'type': child.tag }
    item.update(child.attrib)
    items.append(item)

with open('./items.json', 'w') as f:
    json.dump(items, f, indent=4, sort_keys=True)
