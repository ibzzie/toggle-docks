# toggle-docks package


# Toggle Docks

Quickly toggle visibility of Atom's Docks


## Installation

Install directly using the command line:

```
apm install toggle-docks
```

Or go to __Settings__ > __Install__ > __Packages__ and search for `toggle-docks`

## Commands

#### Toggle Docks: Toggle

Toggles between closing the left, right and bottom docks and restoring the previous state.

```cson
'.platform-darwin atom-workspace':
    'cmd-shift-\'': 'toggle-docks:toggle'

'.platform-win32 atom-workspace, .platform-linux atom-workspace':
    'ctrl-shift-\'': 'toggle-docks:toggle'
```

### Contribution

Please report issues/bugs, feature requests, and suggestions for improvements to the [issue tracker](https://github.com/ibzzie/toggle-docks/issues)
