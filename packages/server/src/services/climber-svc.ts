import { Climber } from '../models/climber';

function index(): Promise<any> {
    return Climber.find();
}

function get(id: string): Promise<any> {
    return Climber.findById(id);
}

function create(json: any): Promise<any> {
    const climber = new Climber(json);
    return climber.save();
}

function update(id: string, data: any): Promise<any> {
    return Climber.findByIdAndUpdate(id, data, { new: true });
}

function remove(id: string): Promise<any> {
    return Climber.findByIdAndDelete(id);
}

export default { index, get, create, update, remove };
