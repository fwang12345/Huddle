from huddle.stateManager import StateManager

#Communicates between clients and state/widget manager
class Router(object):

    """Object for tracking game stats"""
    def __init__(self):
        self.state_manager = StateManager()

    def get_updated_slide(self, key):
        return self.state_manager.getSingleData(key)

    def get_state(self):
        return self.state_manager.getAllData()

    def update_state(self, new_state):
        self.state_manager.update_state(new_state)

    def add_new_widget(self, component):
        self.state_manager.add_new_widget(component)
        
    def update_component(self, component):
        self.state_manager.update_component(component)

    def update_component_id(self, sid, cid, changes):
        self.state_manager.update_component_id(sid, cid, changes)

    def add_new_slide(self, sid):
        self.state_manager.add_new_slide(sid)

