'use babel';

const {
    CompositeDisposable
} = require('atom')

export default {

    subscriptions: null,
    leftDockOpen: null,
    rightDockOpen: null,
    bottomDockOpen: null,


    activate(state) {
        // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
        this.subscriptions = new CompositeDisposable();

        // Register command that toggles this view
        this.subscriptions.add(atom.commands.add('atom-workspace', {
            'toggle-docks:toggle': () => this.toggle()
        }));

        // Sets initial dock variable values to what they currently variable
        leftDockOpen = atom.workspace.getLeftDock().isVisible()
        rightDockOpen = atom.workspace.getRightDock().isVisible()
        bottomDockOpen = atom.workspace.getBottomDock().isVisible()
    },

    deactivate() {
        this.subscriptions.dispose();
    },

    serialize() {
        return {
            toggleDocksViewState: this.toggleDocksView.serialize()
        };
    },

    toggle() {
        if (atom.workspace.getLeftDock().isVisible() || atom.workspace.getRightDock().isVisible() || atom.workspace.getBottomDock().isVisible() ) {
            leftDockOpen = atom.workspace.getLeftDock().isVisible()
            rightDockOpen = atom.workspace.getRightDock().isVisible()
            bottomDockOpen = atom.workspace.getBottomDock().isVisible()
            atom.workspace.getLeftDock().hide()
            atom.workspace.getRightDock().hide()
            atom.workspace.getBottomDock().hide()
        } else if (!atom.workspace.getLeftDock().isVisible() && !atom.workspace.getRightDock().isVisible() && !atom.workspace.getBottomDock().isVisible()) {
            if (leftDockOpen) {
                atom.workspace.getLeftDock().show()
            }
            if (rightDockOpen) {
                atom.workspace.getRightDock().show()
            }
            if (bottomDockOpen) {
                atom.workspace.getBottomDock().show()
            }
        }
    }

};
